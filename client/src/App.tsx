import { useEffect, useState } from "react";
import Header from "./components/header";
import NotesContainer from "./components/notes-container";

export interface NoteType {
  id?: string;
  title: string;
  content: string;
  priority: string;
}

function App() {
  const [notes, setNotes] = useState<NoteType[] | []>([]);

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
  return (
    <>
      <Header setNotes={setNotes} />
      <NotesContainer notes={notes} setNotes={setNotes} />
    </>
  );
}

export default App;
