import { Note } from "@prisma/client";

import { prisma } from "../db/index";
import { INoteRepository } from "./INoteRepository";

export class NoteRepository implements INoteRepository {
  async listNotes(): Promise<Note[]> {
    const notes = await prisma.note.findMany();

    return notes;
  }

  async findById(id: string): Promise<Note | null> {
    const note = await prisma.note.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return note;
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

  async delete(note: Note): Promise<void> {
    await prisma.note.delete({
      where: {
        id: note.id,
      },
    });
  }

  async update(note: Note): Promise<Note> {
    const updatedNote = await prisma.note.update({
      where: {
        id: note.id,
      },
      data: {
        title: note.title,
        content: note.content,
        priority: note.priority,
      },
    });

    return updatedNote;
  }
}
