import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

import { NoteType } from "@/App";
import { useNotesStore } from "@/store/notes-store";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import api from "@/api";
import { useToast } from "./ui/use-toast";

interface NoteCardProps {
  note: NoteType;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    content: note.content,
    priority: note.priority,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { toast } = useToast();

  const addNote = useNotesStore((state) => state.addNote);
  const deleteNote = useNotesStore((state) => state.removeNote);

  const { title, content, priority } = note;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setUpdatedNote({
      ...updatedNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateNote = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/notes/${note.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: updatedNote.title,
            content: updatedNote.content,
            priority: updatedNote.priority,
          }),
        }
      );

      const updatedNotes = await response.json();

      addNote(updatedNotes);

      setIsDialogOpen(false);
    } catch (e) {
      console.log("Erro ao atualizar a nota", e);
    }
  };

  const handleDeleteNote = async () => {
    try {
      const response = await api.delete(`/${note.id}`);

      if (response.statusText === "OK") {
        deleteNote(note);

        toast({
          title: "Note deleted",
          description: "Your note has been deleted successfully.",
        });

        setIsDialogOpen(false);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error deleting your note.",
      });
      console.log(err);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-between items-center">
            <Badge variant="secondary">{priority.toLowerCase()}</Badge>

            <div className="flex justify-between items-center gap-3">
              <DialogTrigger asChild>
                <button className="transition-colors hover:text-emerald-600">
                  <Pencil />
                </button>
              </DialogTrigger>
              <button
                className="transition-colors hover:text-red-600"
                onClick={handleDeleteNote}
              >
                <Trash2 />
              </button>
            </div>
          </div>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleUpdateNote}>
          <DialogHeader>
            <DialogTitle>Update Note</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={updatedNote.title}
                onChange={handleInputChange}
                placeholder="Title..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Note Content</Label>
              <Textarea
                id="content"
                name="content"
                value={updatedNote.content}
                onChange={handleInputChange}
                placeholder="Type your note here."
                required
              />
              <Select
                name="priority"
                value={updatedNote.priority.toLowerCase()}
                onValueChange={(value) => {
                  setUpdatedNote({
                    ...updatedNote,
                    priority: value,
                  });
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Update Note</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NoteCard;
