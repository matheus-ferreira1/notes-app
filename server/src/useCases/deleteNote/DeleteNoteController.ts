import { Request, Response } from "express";

import { NoteRepository } from "../../repository/NoteRepository";
import { DeleteNoteUseCase } from "./DeleteNoteUseCase";

export class DeleteNoteController {
  constructor(private deleteNoteUseCase: DeleteNoteUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.deleteNoteUseCase.execute({ id });
    return res.status(204).send();
  }
}
