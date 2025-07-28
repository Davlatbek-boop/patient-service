import { Module } from "@nestjs/common";
import { PatientModule } from "./patient/patient.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Patient } from "./patient/entities/patient.entity";
import { VisitModule } from './visit/visit.module';
import { NoteModule } from './note/note.module';
import { Visit } from "./visit/entities/visit.entity";
import { Note } from "./note/entities/note.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME,
      entities: [Patient, Visit, Note],
      synchronize: false,
    }),
    PatientModule,
    VisitModule,
    NoteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
