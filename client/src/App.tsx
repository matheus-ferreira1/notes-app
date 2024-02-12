import Header from "./components/header";
import NotesContainer from "./components/notes-container";

export interface NoteType {
  id?: string;
  title: string;
  content: string;
  priority: string;
}

function App() {
  return (
    <>
      <Header />
      <NotesContainer />
    </>
  );
}

export default App;
