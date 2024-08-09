import { sendPushNotification } from '../utils/pushNotification.js';

export const sendNotification = (req, res) => {
    const { subscription, payload } = req.body;

    sendPushNotification(subscription, payload);
    res.status(200).send({ message: 'Notification sent successfully' });
};
