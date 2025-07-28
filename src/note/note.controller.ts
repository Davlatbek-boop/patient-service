import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @GrpcMethod('NoteService', 'Create')
  create(createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @GrpcMethod('NoteService', 'GetAll')
  findAll(_: any) {
    return this.noteService.findAll();
  }

  @GrpcMethod('NoteService', 'GetOne')
  findOne(data: { id: number }) {
    return this.noteService.findOne(data.id);
  }

  @GrpcMethod('NoteService', 'Update')
  update(updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(updateNoteDto.id, updateNoteDto);
  }

  @GrpcMethod('NoteService', 'Delete')
  remove(data: { id: number }) {
    return this.noteService.remove(data.id);
  }
}
