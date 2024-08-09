import { QueryTypes } from 'sequelize';
import { sequelize } from '../models/index.js';

export const getPriceTrend = async (req, res) => {
    const { province } = req.query;

    try {
        const priceTrends = await sequelize.query(
            `SELECT AVG(price) as avgPrice, productId FROM Biddings WHERE province = :province GROUP BY productId`,
            {
                replacements: { province },
                type: QueryTypes.SELECT
            }
        );
        res.status(200).json(priceTrends);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
