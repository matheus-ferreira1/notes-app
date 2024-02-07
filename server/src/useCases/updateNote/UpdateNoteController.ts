import { Request, Response } from "express";

import { UpdateNoteUseCase } from "./updateNoteUseCase";
import { NoteRepository } from "../../repository/NoteRepository";

export class UpdateNoteController {
  constructor(private updateNoteUseCase: UpdateNoteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, content, priority } = req.body;

    const updatedNote = await this.updateNoteUseCase.execute({
      id,
      title,
      content,
      priority,
    });

    return res.status(200).json(updatedNote);
  }
}
