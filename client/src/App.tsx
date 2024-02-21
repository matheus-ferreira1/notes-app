import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/header";
import NotesContainer from "./components/notes-container";

export interface NoteType {
  id?: string;
  title: string;
  content: string;
  priority: string;
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <NotesContainer />
    </QueryClientProvider>
  );
}

export default App;
