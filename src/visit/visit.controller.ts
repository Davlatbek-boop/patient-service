import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';

@Controller()
export class VisitController {
  constructor(private readonly visitService: VisitService) {}

  @GrpcMethod('VisitService', 'Create')
  create(data: CreateVisitDto) {
    return this.visitService.create(data);
  }

  @GrpcMethod('VisitService', 'GetAll')
  findAll() {
    return this.visitService.findAll();
  }

  @GrpcMethod('VisitService', 'Get')
  findOne(data: { id: number }) {
    return this.visitService.findOne(data.id);
  }

  @GrpcMethod('VisitService', 'Update')
  update(data: UpdateVisitDto) {
    return this.visitService.update(data.id, data);
  }

  @GrpcMethod('VisitService', 'Remove')
  remove(data: { id: number }) {
    return this.visitService.remove(data.id);
  }
}
