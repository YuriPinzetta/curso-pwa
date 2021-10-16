console.log('[Application] start push listening');

const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BD6vuWn1zE6w0N9BNdW6j_OsRY16bCdGAzyZC7MvRr2AL-JAAAP3oYBBt78QSmFFzOn6ZSoQmHHvaohqnkbrKB4' }).then((currentToken) => {
    if (currentToken) {
        console.log(currentToken);
        return currentToken;
    } else {
        console.log('No registration token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});