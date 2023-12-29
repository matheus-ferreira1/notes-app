import { FC } from "react";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface CreateFormProps {}

const CreateForm: FC<CreateFormProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Note</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="">
              Title
            </Label>
            <Input id="title" placeholder="Note title..." required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="note" className="">
              Note Content
            </Label>
            <Textarea id="note" placeholder="Type your note here." required />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateForm;
