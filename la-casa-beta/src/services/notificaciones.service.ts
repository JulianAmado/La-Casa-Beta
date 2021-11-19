import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  notificacionesPorSMS():void {
    const accountSid = 'ACe9038eb1e1c83bd12ca0fc4d6c6cf8be'; // Your Account SID from www.twilio.com/console
    const authToken = 'cf333c82b52c519cf58f35e36aeeb048'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hello from Node',
        to: '+573183669250', // Text this number
        from: '+19014790459', // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }
}
