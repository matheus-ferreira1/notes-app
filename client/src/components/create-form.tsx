import { FC, useState } from "react";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/api";
import { useNotesStore } from "@/store/notes-store";
import { useToast } from "./ui/use-toast";

const CreateForm: FC = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    priority: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addNote = useNotesStore((state) => state.addNote);

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/", newNote);

      if (response.statusText === "OK") {
        addNote(newNote);

        setNewNote({
          title: "",
          content: "",
          priority: "",
        });

        toast({
          title: "Note added",
          description: "Your note has been added successfully.",
        });

        setIsDialogOpen(false);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error adding your note.",
      });
      console.log(err);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleAddNote}>
          <DialogHeader>
            <DialogTitle>New Note</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>

              <Input
                id="title"
                name="title"
                placeholder="Note title..."
                value={newNote.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Note Content</Label>
              <Textarea
                name="content"
                id="content"
                placeholder="Type your note here."
                value={newNote.content}
                onChange={handleInputChange}
                required
              />
              <Select
                onValueChange={(value) => {
                  setNewNote({
                    ...newNote,
                    priority: value,
                  });
                }}
                value={newNote.priority}
                name="priority"
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
            <Button type="submit">Save Note</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateForm;
