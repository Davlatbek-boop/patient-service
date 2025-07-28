import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Patient } from "./entities/patient.entity";
import { Repository } from "typeorm";

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private readonly patientRepo: Repository<Patient>
  ) {}
  create(createPatientDto: CreatePatientDto) {
    return this.patientRepo.save(createPatientDto)
  }

  async findAll() {
    const patients = await this.patientRepo.find()
    console.log(patients);
    return { patients }
  }

  findOne(id: number) {
    return this.patientRepo.findOneBy({id})
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
   const patient = await this.patientRepo.preload(updatePatientDto);
    if (!patient) {
      throw new NotFoundException("Bunday id li Patient topilmadi");
    }
    return this.patientRepo.save(patient);
  }

  async remove(id: number) {
   const patient = await this.findOne(id);

    if (!patient) {
      throw new NotFoundException("Bunday id li patient topilmadi");
    }
    this.patientRepo.delete(id);

    return {
      message: `${id} - id li patient o'chirildi`,
    };
  }
}
