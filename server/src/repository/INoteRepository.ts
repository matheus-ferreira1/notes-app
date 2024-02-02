// export type Note = {
//   id: number;
//   title: string;
//   content: string;
//   priority: string;
// };

import { Note } from "@prisma/client";

export interface INoteRepository {
  findById(id: string): Promise<Note | null>;
  listNotes(): Promise<Note[]>;
  createNote(title: string, content: string, priority: string): Promise<Note>;
  delete(note: Note): Promise<void>;
}
