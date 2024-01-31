import { FC, useEffect, useState } from "react";

import NoteCard from "./note-card";

export interface NoteType {
  id?: string;
  title: string;
  content: string;
  priority: string;
}

const NotesContainer: FC = () => {
  const [notes, setNotes] = useState<NoteType[] | []>([]);
  const [selectedNote, setselectedNote] = useState<NoteType | null>({
    title: "",
    content: "",
    priority: "",
  });

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/notes");

        const notes: NoteType[] = await response.json();

        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNotes();
  }, []);

  if (notes.length <= 0) return <p>There are no notes. Create one now!</p>;

  return (
    <div className="container max-w-screen-lg">
      <h1 className="text-lg font-bold mt-10 mb-5">here are your notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {notes?.map((note) => (
          <NoteCard note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
