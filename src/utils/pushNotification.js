import webpush from 'web-push';

webpush.setVapidDetails(
    'mailto:your-email@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

export const sendPushNotification = (subscription, payload) => {
    webpush.sendNotification(subscription, payload).catch(error => {
        console.error('Error sending notification:', error);
    });
};
