import { Note } from "@prisma/client";

import { prisma } from "../db/index";
import { INoteRepository } from "./INoteRepository";

export class NoteRepository implements INoteRepository {
  //   private testNotes: Note[] = [
  //     {
  //       id: 1,
  //       title: "Tarefa 1",
  //       content: "Descrição da Tarefa 1",
  //       priority: "alta",
  //     },
  //     {
  //       id: 2,
  //       title: "Tarefa 2",
  //       content: "Descrição da Tarefa 2",
  //       priority: "media",
  //     },
  //     {
  //       id: 3,
  //       title: "Tarefa 3",
  //       content: "Descrição da Tarefa 3",
  //       priority: "baixa",
  //     },
  //     {
  //       id: 4,
  //       title: "Tarefa 4",
  //       content: "Descrição da Tarefa 4",
  //       priority: "alta",
  //     },
  //     {
  //       id: 5,
  //       title: "Tarefa 5",
  //       content: "Descrição da Tarefa 5",
  //       priority: "media",
  //     },
  //     {
  //       id: 6,
  //       title: "Tarefa 6",
  //       content: "Descrição da Tarefa 6",
  //       priority: "baixa",
  //     },
  //     {
  //       id: 7,
  //       title: "Tarefa 7",
  //       content: "Descrição da Tarefa 7",
  //       priority: "alta",
  //     },
  //     {
  //       id: 8,
  //       title: "Tarefa 8",
  //       content: "Descrição da Tarefa 8",
  //       priority: "media",
  //     },
  //     {
  //       id: 9,
  //       title: "Tarefa 9",
  //       content: "Descrição da Tarefa 9",
  //       priority: "baixa",
  //     },
  //     {
  //       id: 10,
  //       title: "Tarefa 10",
  //       content: "Descrição da Tarefa 10",
  //       priority: "alta",
  //     },
  //   ];

  async listNotes(): Promise<Note[]> {
    //to do: implement prisma and db search
    // const notes = this.testNotes;

    const notes = await prisma.note.findMany();
    return notes;
  }

  async createNote(
    title: string,
    content: string,
    priority: string
  ): Promise<Note> {
    const note = await prisma.note.create({
      data: {
        title,
        content,
        priority,
      },
    });

    return note;
  }
}
