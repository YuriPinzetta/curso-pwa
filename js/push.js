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