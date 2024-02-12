import { FC, useEffect } from "react";

import { useNotesStore } from "@/store/notes-store";
import NoteCard from "./note-card";

const NotesContainer: FC = () => {
  const fetch = useNotesStore((state) => state.fetchNotes);
  const notes = useNotesStore((state) => state.notes);

  useEffect(() => {
    fetch();
  }, []);

  if (notes.length == 0) return <p>There are no notes. Create one now!</p>;

  return (
    <div className="container max-w-screen-lg">
      <h1 className="text-lg font-bold mt-10 mb-5">Here are your notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {notes?.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
