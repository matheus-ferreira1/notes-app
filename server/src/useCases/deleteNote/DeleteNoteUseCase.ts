import { NoteRepository } from "../../repository/NoteRepository";
import { AppError } from "../../shared/errors/AppError";

type DeleteNoteParams = {
  id: string;
};

export class DeleteNoteUseCase {
  constructor(private notesRepository: NoteRepository) {}

  async execute({ id }: DeleteNoteParams): Promise<void> {
    const note = await this.notesRepository.findById(id);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    await this.notesRepository.delete(note);
  }
}
