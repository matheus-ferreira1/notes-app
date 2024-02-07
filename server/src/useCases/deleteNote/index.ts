import { NoteRepository } from "../../repository/NoteRepository";
import { DeleteNoteController } from "./DeleteNoteController";
import { DeleteNoteUseCase } from "./DeleteNoteUseCase";

const noteRepository = NoteRepository.getInstance();
const deleteNoteUseCase = new DeleteNoteUseCase(noteRepository);
export const deleteNoteController = new DeleteNoteController(deleteNoteUseCase);
