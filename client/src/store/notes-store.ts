import { create } from "zustand";

import { NoteType } from "@/App";
import api from "@/api";

type INoteStore = {
  notes: NoteType[];
  addNote: (note: NoteType) => void;
  removeNote: (note: NoteType) => void;
  fetchNotes: () => Promise<void>;
};

export const useNotesStore = create<INoteStore>((set) => ({
  notes: [],
  fetchNotes: async () => {
    try {
      const response = await api.get("/");
      set({ notes: response.data });
    } catch (err) {
      console.log(err);
    }
  },
  addNote: (note: NoteType) =>
    set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (note: NoteType) =>
    set((state) => ({ notes: state.notes.filter((n) => n !== note) })),
}));
