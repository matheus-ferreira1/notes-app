import { Router } from "express";
import { ListNotesController } from "../useCases/listNotes/ListNotesController";
import { CreateNoteController } from "../useCases/createNote/CreateNoteController";
import { DeleteNoteController } from "../useCases/deleteNote/DeleteNoteController";

const notesRouter = Router();

const listNotesController = new ListNotesController();
const createNoteController = new CreateNoteController();
const deleteNoteController = new DeleteNoteController();

notesRouter.get("/", (req, res) => {
  res.json({ message: "notes router get test" });
});

notesRouter.get("/api/notes", (req, res) => {
  return listNotesController.handle(req, res);
});

notesRouter.post("/api/notes", (req, res) => {
  return createNoteController.handle(req, res);
});

notesRouter.delete("/api/notes/:id", (req, res) => {
  return deleteNoteController.handle(req, res);
});

export { notesRouter };