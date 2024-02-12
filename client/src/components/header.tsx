import { FC } from "react";
import { Icons } from "./icons";

import CreateForm from "./create-form";

const Header: FC = () => {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 ">
      <div className="container max-w-screen-lg flex items-center justify-between h-20">
        <Icons.logo />
        <CreateForm />
      </div>
    </header>
  );
};

export default Header;
