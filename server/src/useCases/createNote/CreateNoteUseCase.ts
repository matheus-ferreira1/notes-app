import { Note } from "@prisma/client";

import { INoteRepository } from "../../repository/INoteRepository";

export class CreateNoteUseCase {
  constructor(private notesRepository: INoteRepository) {}

  async execute(
    title: string,
    content: string,
    priority: string
  ): Promise<Note> {
    return this.notesRepository.createNote(title, content, priority);
  }
}
