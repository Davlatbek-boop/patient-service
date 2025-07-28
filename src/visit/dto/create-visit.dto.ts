import { IsDate, IsNumber } from "class-validator";

export class CreateVisitDto {
    @IsNumber()
    patientId:number

    @IsDate()
    visitDate: Date;
}
