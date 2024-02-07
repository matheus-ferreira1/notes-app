import { Request, Response } from "express";

import { NoteRepository } from "../../repository/NoteRepository";
import { ListNotesUseCase } from "./ListNotesUseCase";

export class ListNotesController {
  constructor(private listNotesUseCase: ListNotesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const notes = await this.listNotesUseCase.execute();
    return res.json(notes);
  }
}
