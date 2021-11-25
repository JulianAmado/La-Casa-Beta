import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { Empleado } from '../models';
require('dotenv').config();
@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  notificacionesPorSMS(Empleado: Empleado, clave: string){
    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

    const twPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hola, '+Empleado.nombres+" "+Empleado.apellidos+' ahora eres empleado de la Casa Beta, tu usuario es: '+Empleado.email+" y tu clave es: "+clave,
        to: '+573183771403', // Text this number
        from: twPhoneNumber, // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }
      
  notificacionesDinamicasPorSMS(correo: string, telefono:string, body:string):void {
    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

    const twPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // You twilio phone number

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);
    
    client.messages
      .create({
        body: correo + body,
        to: telefono, // Text this number
        from: twPhoneNumber, // From a valid Twilio number
      })
      .then((message:any) => console.log(message.sid));
      }
}
