import { Request, Response } from "express";

import { ListNotesSevice } from "../service/ListNotesService";
import { NoteRepository } from "../repository/NoteRepository";

export class ListNotesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listNotes = new ListNotesSevice(new NoteRepository());
    const notes = await listNotes.execute();
    return res.json(notes);
  }
}
