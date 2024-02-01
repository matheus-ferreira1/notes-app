import { INoteRepository, Note } from "../interfaces/INoteRepository";

export class ListNotesSevice {
  constructor(private notesRepository: INoteRepository) {}

  async execute(): Promise<Note[]> {
    return this.notesRepository.listNotes();
  }
}
