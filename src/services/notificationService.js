import webpush from 'web-push';

webpush.setVapidDetails(
    'mailto:' + process.env.EMAIL_USER,
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
);

export const sendPushNotification = (subscription, payload) => {
    return webpush.sendNotification(subscription, payload)
        .then(response => {
            console.log('Notification sent:', response);
            return response;
        })
        .catch(error => {
            console.error('Error sending notification:', error);
            throw error;
        });
};
