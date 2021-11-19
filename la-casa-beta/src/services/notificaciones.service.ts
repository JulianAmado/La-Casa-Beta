import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  notificacionesPorSMS():void {
    const accountSid = 'AC7ad71c9d0158b16f7d8ac7c254144a5c'; // Your Account SID from www.twilio.com/console
    const authToken = '33e6e746adcfd612e5da737424cd472b'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Prueba Sprint 2',
        to: '+573197283549', // Text this number
        from: '+14706194520', // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }
}
