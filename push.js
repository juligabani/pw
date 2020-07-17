var push = require('web-push');

let vapidkeys =  {
    publicKey: 'BClvf1hLh9A6-noI_XR0-mE6Gqeg4wJOd2f2dzh0PbKoe88rruQ5wk0kgCUWpOfHwZyzJVxtrXEF8SaKZ-4FgwY',
    privateKey: 'HCNM58LASi0yXB2zxeW3jC6EXUhB-xnIcY88edLcHKM'
}

push.setVapidDetails('mailto:juligabani96@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/dNf4wnyZB4s:APA91bHvSwLJDu6Y7aUpw0shIsKtcuBHP7AjU3Us5TyziCh8F0QQZpdJZQCOMNt0AeXJBzQd0VBrWrpRttlZTwoUBetESOTroljBItCcOM9y8UxW9oJosXh95WuJT24jCgLP5Hgv6yzf",
    "expirationTime":null,
    "keys": {
        "p256dh":"BNyl_cGqGyNmH3IJiGZokIxwyXGjauFUUoF6KCfWRVNgNE_Ys8hRo31nE_zpjinnYv1o6ip-ita1AZNgZQU1u1Y",
        "auth":"qjcGLs7bkQH1vvJLneTuwQ"
    }
};

push.sendNotification(sub,'Test Message');
