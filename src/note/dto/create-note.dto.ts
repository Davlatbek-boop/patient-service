import { IsNumber, IsString } from "class-validator";

export class CreateNoteDto {
  @IsNumber()
  visit_id: number;

  @IsString()
  text: string;
}
