export type Note = {
  id: number;
  title: string;
  content: string;
  priority: string;
};

export interface INoteRepository {
  listNotes(): Promise<Note[]>;
}
