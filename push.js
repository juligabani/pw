var push = require('web-push');

let vapidkeys =  {
    publicKey: 'BClvf1hLh9A6-noI_XR0-mE6Gqeg4wJOd2f2dzh0PbKoe88rruQ5wk0kgCUWpOfHwZyzJVxtrXEF8SaKZ-4FgwY',
    privateKey: 'HCNM58LASi0yXB2zxeW3jC6EXUhB-xnIcY88edLcHKM'
}

push.setVapidDetails('mailto:juligabani96@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

let sub = {};
push.sendNotification(sub,'Test Message');
