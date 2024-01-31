import { FC, useEffect, useState } from "react";
import NoteCard from "./note-card";
import { testNotes } from "@/contants/notes";

export interface NoteType {
  id?: string;
  title: string;
  content: string;
  priority: string;
}

const NotesContainer: FC = () => {
  const [notes, setNotes] = useState<NoteType[] | null>(testNotes);
  const [selectedNote, setselectedNote] = useState<NoteType | null>({
    title: "",
    content: "",
    priority: "",
  });

  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4000/notes");

  //       const notes = await res.json();

  //       setNotes(notes);
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     fetchNotes();
  //   };
  // }, []);

  if (!notes) return <p>There are no notes. Create one now!</p>;

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
