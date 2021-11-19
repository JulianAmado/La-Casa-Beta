import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {MensajesEmpleados, MensajesEmpleadosRelations} from '../models';

export class MensajesEmpleadosRepository extends DefaultCrudRepository<
  MensajesEmpleados,
  typeof MensajesEmpleados.prototype.id,
  MensajesEmpleadosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(MensajesEmpleados, dataSource);
  }
}
