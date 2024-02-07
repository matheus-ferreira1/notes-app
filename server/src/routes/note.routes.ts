import { Router } from "express";

import { listNotesController } from "../useCases/listNotes";
import { createNoteController } from "../useCases/createNote";
import { deleteNoteController } from "../useCases/deleteNote";
import { updateNoteController } from "../useCases/updateNote";

const notesRouter = Router();

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

notesRouter.put("/api/notes/:id", (req, res) => {
  return updateNoteController.handle(req, res);
});

export { notesRouter };
