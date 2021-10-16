console.log('[Application] start push listening');

const messaging = app.messaging();
const teste = messaging.getToken({vapidKey: "BD6vuWn1zE6w0N9BNdW6j_OsRY16bCdGAzyZC7MvRr2AL-JAAAP3oYBBt78QSmFFzOn6ZSoQmHHvaohqnkbrKB4"});
console.log(teste)