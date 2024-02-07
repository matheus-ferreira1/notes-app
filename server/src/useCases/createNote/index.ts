import { NoteRepository } from "../../repository/NoteRepository";
import { CreateNoteController } from "./CreateNoteController";
import { CreateNoteUseCase } from "./CreateNoteUseCase";

const noteRepository = NoteRepository.getInstance();
const createNoteUseCase = new CreateNoteUseCase(noteRepository);
export const createNoteController = new CreateNoteController(createNoteUseCase);
