import { Router } from "express";

import { ListNotesController } from "../controllers/notesController";

const notesRouter = Router();

const listNotesController = new ListNotesController();

notesRouter.get("/", (req, res) => {
  res.json({ message: "notes router get test" });
});

notesRouter.get("/api/notes", (req, res) => {
  return listNotesController.handle(req, res);
});

export { notesRouter };
