var push = require('web-push');

let vapidkeys =  {
    publicKey: 'BClvf1hLh9A6-noI_XR0-mE6Gqeg4wJOd2f2dzh0PbKoe88rruQ5wk0kgCUWpOfHwZyzJVxtrXEF8SaKZ-4FgwY',
    privateKey: 'HCNM58LASi0yXB2zxeW3jC6EXUhB-xnIcY88edLcHKM'
}

push.setVapidDetails('mailto:juligabani96@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {
    "endpoint":"https://fcm.googleapis.com/fcm/send/d0eThAwCDuE:APA91bEkqHKyNxWR6LfmoHxYucH_uYBQEpAn-PGT75cFUJHFQ1FhW09KRn1Ytfdyo0UhFeCzXWKWsClH-QixeayypytoBrUhw1ZfKTAsgRDymdtViekJMApyCJJ0JUmU4sJ1N3B0agWC",
    "expirationTime":null,
    "keys": {
        "p256dh":"BJH6S3QDjT4p9aRjrpMN8u5wiSOQEbc_px7Jo3XyR-o74t8wo5I0PpsXDpwwnR1QU6HyZNmj-U2EY5Aa1DyVttg",
        "auth":"WFe5UZ4_skv0bpG3CD1pCw"
    }
};

push.sendNotification(sub,'Test Message');
