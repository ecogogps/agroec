import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import { sequelize } from './models/index.js';
import chatHandler from './utils/chatHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io instance
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
import authRoutes from './routes/auth.js';
import productRoutes from './routes/product.js';
import biddingRoutes from './routes/bidding.js';
import chatRoutes from './routes/chat.js';
import profileRoutes from './routes/profile.js';
import orderRoutes from './routes/order.js';
import walletRoutes from './routes/wallet.js';
import suggestionRoutes from './routes/suggestion.js';
import roleRoutes from './routes/role.js';
import notificationRoutes from './routes/notification.js';
import excelRoutes from './routes/excel.js';
import purchaseProposalRoutes from './routes/purchaseProposal.js';

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/biddings', biddingRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/suggestions', suggestionRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/excel', excelRoutes);
app.use('/api/purchase-proposals', purchaseProposalRoutes);

// WebSocket chat handler
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('joinRoom', ({ room }) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on('message', ({ room, message }) => {
        io.to(room).emit('message', message);
        chatHandler.saveMessage(room, message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

// Sync database and start server
sequelize.sync().then(() => {
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
