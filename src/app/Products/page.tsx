import PageMark from "@/components/PageMark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackagePlus } from "lucide-react";
import Link from "next/link";
const pages = ["Home", "Products"];

async function getData() {
  const res = await fetch("http://localhost:8080/products");

  if (!res.ok) {
    throw new Error("Erro ao carregar dados");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getData();

  console.log(products);
  return (
    <main>
      <div>
        <PageMark pages={pages} />
      </div>
      <div className="flex gap-2">
        <div className="w-1/2">
          <Table className="bg-zinc-950 rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {products.map(
                (item: {
                  id: number;
                  category: string;
                  description: string;
                  price: string;
                }) => (
                  <>
                    <TableRow className="">
                      <TableCell className="w-0.5">{item.id}</TableCell>
                      <TableCell className="">{item.category}</TableCell>
                      <TableCell className="">{item.description}</TableCell>
                      <TableCell className="">{item.price}</TableCell>
                    </TableRow>
                  </>
                )
              )}
            </TableBody>
          </Table>
        </div>
        <div className="w-1/2">
          <Card className="w-1/4 ">
            <CardHeader>Add A New Product</CardHeader>
            <CardContent className="flex justify-center">
              <Button>
                <Link href={"/products/add-new"}>
                  <PackagePlus />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div></div>
    </main>
  );
}
