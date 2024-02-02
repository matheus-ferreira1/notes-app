import { INoteRepository } from "../../repository/INoteRepository";
import { AppError } from "../../shared/errors/AppError";

type DeleteNoteParams = {
  id: string;
};

export class DeleteNoteUseCase {
  constructor(private notesRepository: INoteRepository) {}

  async execute({ id }: DeleteNoteParams): Promise<void> {
    const note = await this.notesRepository.findById(id);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    await this.notesRepository.delete(note);
  }
}
