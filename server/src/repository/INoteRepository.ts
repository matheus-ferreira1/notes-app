// export type Note = {
//   id: number;
//   title: string;
//   content: string;
//   priority: string;
// };

import { Note } from "@prisma/client";

export interface INoteRepository {
  listNotes(): Promise<Note[]>;
  createNote(title: string, content: string, priority: string): Promise<Note>;
}
