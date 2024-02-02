import { Request, Response } from "express";

import { NoteRepository } from "../../repository/NoteRepository";
import { DeleteNoteUseCase } from "./DeleteNoteUseCase";

export class DeleteNoteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteNote = new DeleteNoteUseCase(new NoteRepository());
    await deleteNote.execute({ id });
    return res.status(204).send();
  }
}
