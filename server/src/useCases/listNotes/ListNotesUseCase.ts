import { Note } from "@prisma/client";

import { NoteRepository } from "../../repository/NoteRepository";

export class ListNotesUseCase {
  constructor(private notesRepository: NoteRepository) {}

  async execute(): Promise<Note[]> {
    return this.notesRepository.listNotes();
  }
}
