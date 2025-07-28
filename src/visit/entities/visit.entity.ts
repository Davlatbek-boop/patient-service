import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "../../patient/entities/patient.entity";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  visit_date: Date;

  @ManyToOne(() => Patient, (patient) => patient.visits)
  patient: Patient;
}
