import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

import { NoteType } from "@/App";
import { getNotes } from "@/api/get-notes";

import NoteCard from "./note-card";

const NotesContainer: FC = () => {
  const {
    isPending,
    isError,
    error,
    data: notes,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-lg">
      <h1 className="text-lg font-bold mt-10 mb-5">Here are your notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {notes?.map((note: NoteType) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
