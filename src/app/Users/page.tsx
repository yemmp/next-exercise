import PageMark from "@/components/PageMark";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import Image from "next/image";
async function getUsers() {
  const res = await fetch("http://localhost:8080/users");
  if (!res.ok) {
    throw new Error("Erro ao carregar dados");
  }
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  console.log(users);
  return (
    <article className="">
      <h1>Users PAGE</h1>
    </article>
  );
}
