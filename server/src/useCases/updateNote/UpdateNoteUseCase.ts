import { NoteRepository } from "../../repository/NoteRepository";
import { AppError } from "../../shared/errors/AppError";

type UpdateNoteDTO = {
  id: string;
  title: string;
  content: string;
  priority: string;
};

export class UpdateNoteUseCase {
  constructor(private notesRepository: NoteRepository) {}

  async execute({
    id,
    title,
    content,
    priority,
  }: UpdateNoteDTO): Promise<void> {
    const note = await this.notesRepository.findById(id);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    note.title = title;
    note.content = content;
    note.priority = priority;

    await this.notesRepository.update(note);
  }
}
