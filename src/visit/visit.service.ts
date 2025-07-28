import { Injectable } from "@nestjs/common";
import { CreateVisitDto } from "./dto/create-visit.dto";
import { UpdateVisitDto } from "./dto/update-visit.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Visit } from "./entities/visit.entity";
import { Repository } from "typeorm";

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(Visit) private readonly visitRepo: Repository<Visit>
  ) {}
  create(createVisitDto: CreateVisitDto) {
    return this.visitRepo.save({
      ...createVisitDto,
      visit_date: createVisitDto.visitDate,
    });
  }

  async findAll() {
    const visit = await this.visitRepo.find();
    return { visits: visit };
  }

  findOne(id: number) {
    return this.visitRepo.findOneBy({ id });
  }

  update(id: number, updateVisitDto: UpdateVisitDto) {
    return this.visitRepo.update(id, updateVisitDto);
  }

  remove(id: number) {
    return this.visitRepo.delete(id);
  }
}
