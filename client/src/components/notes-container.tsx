import { Dispatch, FC, SetStateAction } from "react";

import NoteCard from "./note-card";
import { NoteType } from "@/App";

interface INotesContainerProps {
  notes: NoteType[];
  setNotes: Dispatch<SetStateAction<[] | NoteType[]>>;
}

const NotesContainer: FC<INotesContainerProps> = ({ notes, setNotes }) => {
  if (notes.length <= 0) return <p>There are no notes. Create one now!</p>;

  return (
    <div className="container max-w-screen-lg">
      <h1 className="text-lg font-bold mt-10 mb-5">here are your notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {notes?.map((note) => (
          <NoteCard key={note.id} note={note} setNotes={setNotes} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
