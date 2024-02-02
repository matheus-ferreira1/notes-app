import { Request, Response } from "express";

import { NoteRepository } from "../../repository/NoteRepository";
import { ListNotesUseCase } from "./ListNotesUseCase";

export class ListNotesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listNotes = new ListNotesUseCase(new NoteRepository());
    const notes = await listNotes.execute();
    return res.json(notes);
  }
}
