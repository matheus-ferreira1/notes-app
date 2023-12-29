import { FC, useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

const NotesContainer: FC = () => {
  const [notes, setNotes] = useState<Note[] | null>([]);

  return <div className="container max-w-screen-lg">NotesContainer</div>;
};

export default NotesContainer;
