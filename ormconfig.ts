import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Patient } from './src/patient/entities/patient.entity';
import { Visit } from './src/visit/entities/visit.entity';
import { Note } from './src/note/entities/note.entity';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Patient, Visit, Note],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, 
});
