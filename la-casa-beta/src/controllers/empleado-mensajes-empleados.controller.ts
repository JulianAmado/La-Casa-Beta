import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Empleado,
  MensajesEmpleados,
} from '../models';
import {EmpleadoRepository} from '../repositories';

export class EmpleadoMensajesEmpleadosController {
  constructor(
    @repository(EmpleadoRepository) protected empleadoRepository: EmpleadoRepository,
  ) { }

  @get('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Array of Empleado has many MensajesEmpleados',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(MensajesEmpleados)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<MensajesEmpleados>,
  ): Promise<MensajesEmpleados[]> {
    return this.empleadoRepository.mensajesEmpleados(id).find(filter);
  }

  @post('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: getModelSchemaRef(MensajesEmpleados)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleado.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleados, {
            title: 'NewMensajesEmpleadosInEmpleado',
            exclude: ['id'],
            optional: ['empleadoId']
          }),
        },
      },
    }) mensajesEmpleados: Omit<MensajesEmpleados, 'id'>,
  ): Promise<MensajesEmpleados> {
    return this.empleadoRepository.mensajesEmpleados(id).create(mensajesEmpleados);
  }

  @patch('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado.MensajesEmpleados PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MensajesEmpleados, {partial: true}),
        },
      },
    })
    mensajesEmpleados: Partial<MensajesEmpleados>,
    @param.query.object('where', getWhereSchemaFor(MensajesEmpleados)) where?: Where<MensajesEmpleados>,
  ): Promise<Count> {
    return this.empleadoRepository.mensajesEmpleados(id).patch(mensajesEmpleados, where);
  }

  @del('/empleados/{id}/mensajes-empleados', {
    responses: {
      '200': {
        description: 'Empleado.MensajesEmpleados DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(MensajesEmpleados)) where?: Where<MensajesEmpleados>,
  ): Promise<Count> {
    return this.empleadoRepository.mensajesEmpleados(id).delete(where);
  }
}
