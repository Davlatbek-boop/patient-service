import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Visit } from "../../visit/entities/visit.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  visit_id: number;

  @Column()
  text: string;

  @ManyToOne(() => Visit, (visit) => visit.note)
  visit: Visit;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
