import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'string',
  })
  school?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  schoolId?: number;

  @property({
    type: 'number',
    required: true,
  })
  _id: number;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  degree?: string;

  @property({
    type: 'string',
  })
  program?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
