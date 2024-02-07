import { NoteRepository } from "../../repository/NoteRepository";
import { UpdateNoteController } from "./updateNoteController";
import { UpdateNoteUseCase } from "./updateNoteUseCase";

const noteRepository = NoteRepository.getInstance();
const updateNoteUseCase = new UpdateNoteUseCase(noteRepository);
export const updateNoteController = new UpdateNoteController(updateNoteUseCase);
