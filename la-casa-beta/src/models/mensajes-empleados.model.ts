import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Empleado } from '.';

@model()
export class MensajesEmpleados extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  @belongsTo(() => Empleado)
  empleadoId: string;

  constructor(data?: Partial<MensajesEmpleados>) {
    super(data);
  }
}

export interface MensajesEmpleadosRelations {
  // describe navigational properties here
}

export type MensajesEmpleadosWithRelations = MensajesEmpleados & MensajesEmpleadosRelations;
