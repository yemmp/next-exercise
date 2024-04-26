import { Avatar } from "./ui/avatar";
import { User } from "lucide-react";
import { Input } from "./ui/input";
import React from "react";
import { Button } from "./ui/button";

export default function Searchbar() {
  return (
    <section className="flex p-1 gap-2">
      <Input placeholder={"Search"} />
      <Button size="icon" className="rounded-full">
        <Avatar className="p-2 ">
          <User />
        </Avatar>
      </Button>
    </section>
  );
}
