import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Patient } from "../../patient/entities/patient.entity";
import { Note } from "../../note/entities/note.entity";

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  visit_date: Date;

  @ManyToOne(() => Patient, (patient) => patient.visits)
  patient: Patient;

  @OneToMany(() => Note, (note) => note.visit)
    note: Note[];
}
