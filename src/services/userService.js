import User from '../models/user.js';
import bcrypt from 'bcrypt';

export const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    return User.create(userData);
};

export const getUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
};

export const updateUser = async (id, updateData) => {
    return User.update(updateData, { where: { id } });
};

export const deleteUser = async (id) => {
    return User.destroy({ where: { id } });
};
