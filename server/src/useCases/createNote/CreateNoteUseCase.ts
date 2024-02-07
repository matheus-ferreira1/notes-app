import { Note } from "@prisma/client";

import { NoteRepository } from "../../repository/NoteRepository";

export class CreateNoteUseCase {
  constructor(private notesRepository: NoteRepository) {}

  async execute(
    title: string,
    content: string,
    priority: string
  ): Promise<Note> {
    return this.notesRepository.createNote(title, content, priority);
  }
}
