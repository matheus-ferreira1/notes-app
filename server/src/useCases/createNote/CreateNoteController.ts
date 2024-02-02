import { Request, Response } from "express";

import { NoteRepository } from "../../repository/note-repository";
import { CreateNoteUseCase } from "./CreateNoteUseCase";

export class CreateNoteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, priority } = req.body;
    const createNote = new CreateNoteUseCase(new NoteRepository());
    const note = await createNote.execute(title, content, priority);
    return res.json(note);
  }
}
