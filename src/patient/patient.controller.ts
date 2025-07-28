import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";

@Controller()
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @GrpcMethod("PatientService", "Create")
  create(data: CreatePatientDto) {
    return this.patientService.create(data);
  }

  @GrpcMethod("PatientService", "GetAll")
  findAll() {
    return this.patientService.findAll();
  }

  @GrpcMethod("PatientService", "Get")
  findOne(data: { id: number }) {
    return this.patientService.findOne(data.id);
  }

  @GrpcMethod("PatientService", "Update")
  update(data: UpdatePatientDto) {
    return this.patientService.update(data.id, data);
  }

  @GrpcMethod("PatientService", "Delete")
  remove(data: { id: number }) {
    return this.patientService.remove(data.id);
  }
}
