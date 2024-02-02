import { Router } from "express";
import { ListNotesController } from "../useCases/listNotes/ListNotesController";
import { CreateNoteController } from "../useCases/createNote/CreateNoteController";

const notesRouter = Router();

const listNotesController = new ListNotesController();
const createNoteController = new CreateNoteController();

notesRouter.get("/", (req, res) => {
  res.json({ message: "notes router get test" });
});

notesRouter.get("/api/notes", (req, res) => {
  return listNotesController.handle(req, res);
});

notesRouter.post("/api/notes", (req, res) => {
  return createNoteController.handle(req, res);
});

export { notesRouter };
