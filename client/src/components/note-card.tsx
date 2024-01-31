import { Pencil, Trash2 } from "lucide-react";

import { NoteType } from "./notes-container";

import { cn } from "@/lib/utils";

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

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const { title, content, priority } = note;

  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-between items-center">
            <Badge variant="secondary">{priority}</Badge>

            <div className="flex justify-between items-center gap-3">
              <DialogTrigger asChild>
                <button className="transition-colors hover:text-emerald-600">
                  <Pencil />
                </button>
              </DialogTrigger>
              <button className="transition-colors hover:text-red-600">
                <Trash2 />
              </button>
            </div>
          </div>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Note</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="" />
            <Input id="title" placeholder="Title..." required value={title} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note" className="">
              Note Content
            </Label>
            <Textarea
              id="note"
              placeholder="Type your note here."
              required
              value={content}
            />
            <Select value={priority}>
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
      </DialogContent>
    </Dialog>
  );
};

export default NoteCard;
