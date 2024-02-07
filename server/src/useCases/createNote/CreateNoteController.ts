import { Request, Response } from "express";

import { NoteRepository } from "../../repository/NoteRepository";
import { CreateNoteUseCase } from "./CreateNoteUseCase";

export class CreateNoteController {
  constructor(private createNoteUseCase: CreateNoteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, priority } = req.body;
    const note = await this.createNoteUseCase.execute(title, content, priority);
    return res.json(note);
  }
}
