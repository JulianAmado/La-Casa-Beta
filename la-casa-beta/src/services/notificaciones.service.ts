import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  notificacionesPorSMS():void {
    const accountSid = 'ACbe3bd4f6acd6c025873be9084adcc04e'; // Your Account SID from www.twilio.com/console
    const authToken = '08d26ed9f34d6f26e4e10f01f09c5710'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Se ha creado un empleado en la base de datos',
        to: '+573183771403', // Text this number
        from: '+14706194478', // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }

  notificacionesDinamicasPorSMS(correo: string, telefono:string, body:string):void {
    const accountSid = 'ACbe3bd4f6acd6c025873be9084adcc04e'; // Your Account SID from www.twilio.com/console
    const authToken = '08d26ed9f34d6f26e4e10f01f09c5710'; // Your Auth Token from www.twilio.com/console
    
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
    
    client.messages
      .create({
        body: correo + body,
        to: telefono, // Text this number
        from: '+14706194478', // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }
}
