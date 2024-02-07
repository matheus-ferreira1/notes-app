import { NoteRepository } from "../../repository/NoteRepository";
import { ListNotesController } from "./ListNotesController";
import { ListNotesUseCase } from "./ListNotesUseCase";

const rolesRepository = NoteRepository.getInstance();
const listNotesUseCase = new ListNotesUseCase(rolesRepository);
export const listNotesController = new ListNotesController(listNotesUseCase);
