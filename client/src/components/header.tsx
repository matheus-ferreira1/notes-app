import { Dispatch, FC, SetStateAction } from "react";
import { Icons } from "./icons";
import CreateForm from "./create-form";
import { NoteType } from "@/App";

interface HeaderProps {
  setNotes: Dispatch<SetStateAction<[] | NoteType[]>>;
}

const Header: FC<HeaderProps> = ({ setNotes }) => {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 ">
      <div className="container max-w-screen-lg flex items-center justify-between h-20">
        <Icons.logo />
        <CreateForm setNotes={setNotes} />
      </div>
    </header>
  );
};

export default Header;
