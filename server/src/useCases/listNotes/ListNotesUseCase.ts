import { Note } from "@prisma/client";

import { INoteRepository } from "../../repository/INoteRepository";

export class ListNotesUseCase {
  constructor(private notesRepository: INoteRepository) {}

  async execute(): Promise<Note[]> {
    return this.notesRepository.listNotes();
  }
}
