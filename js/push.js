// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdztlx1qCnX1AzQ7sPdbItlSDJE9YTvOw",
    authDomain: "cursopwa-74a60.firebaseapp.com",
    projectId: "cursopwa-74a60",
    storageBucket: "cursopwa-74a60.appspot.com",
    messagingSenderId: "400182072238",
    appId: "1:400182072238:web:616c764aa2d8d1f6ef2e3f",
    measurementId: "G-0PXTF8DZ1F"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app_firebase);
console.log('[Application] start push listening');

const messaging = app_firebase.messaging();

messaging.requestPermission().then(function () {
    console.log('Permission granted')

    return messaging.getToken().then(function (currentToken) {
        if(currentToken){
            console.log(currentToken);
            return currentToken;
        }else{
            console.warn('Nenhum id disponivel, Solicite permissão para gerar um');
        }
    })
})