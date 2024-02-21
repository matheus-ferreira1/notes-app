import { FC, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Pencil } from "lucide-react";

import { NoteType } from "@/App";

import { deleteNote } from "@/api/delete-note";
import { updateNote } from "@/api/update-note";

import { useToast } from "./ui/use-toast";

import DeleteButton from "./delete-button";
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

interface NoteCardProps {
  note: NoteType;
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  const { title, content, priority, id } = note;
  const [updatedNote, setUpdatedNote] = useState({
    id: id,
    title: title,
    content: content,
    priority: priority,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { toast } = useToast();

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

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully.",
      });
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error deleting your note.",
      });
      console.log(error);
    },
  });

  const handleDeleteNote = () => {
    deleteMutation.mutate(note);
  };

  const updateMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast({
        title: "Note updated",
        description: "Your note has been updated successfully.",
      });
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error updating your note.",
      });
      console.log(error);
    },
  });

  const handleUpdateNote = (e: React.FormEvent) => {
    e.preventDefault();

    updateMutation.mutate(updatedNote);
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
              <DeleteButton handleDeleteNote={handleDeleteNote} note={note} />
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
