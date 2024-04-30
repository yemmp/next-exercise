import PageMark from "@/components/PageMark";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const pages = ["Home", "Products"];
const tableItem = [
  {
    code: 1,
    category: "Eletronics",
    description: "Smartphone Samsung Galaxy S22",
    price: "$1499.99",
  },
  {
    code: 2,
    category: "Clothing",
    description: "Male Polo T-Shirt",
    price: "$39.99",
  },
  {
    code: 3,
    category: "Books",
    description: "Javascript: The Good Parts",
    price: "$29.99",
  },
  {
    code: 4,
    category: "Eletronics",
    description: "Bluetooth Headphones",
    price: "$229.99",
  },
  {
    code: 5,
    category: "Books",
    description: "React 101",
    price: "$39.99",
  },
  {
    code: 6,
    category: "Acessories",
    description: "Leather Bag",
    price: "$229.99",
  },
  {
    code: 7,
    category: "Eletronics",
    description: "Notebook",
    price: "$999.99",
  },
  {
    code: 8,
    category: "Clothing",
    description: "Skinny Jeans Pants",
    price: "$59.99",
  },
  {
    code: 9,
    category: "Acessories",
    description: "Analog Watch",
    price: "$89.99",
  },
  {
    code: 10,
    category: "Books",
    description: "Lord of The Rings: Fellowship of the ring",
    price: "$49.99",
  },
];

export default function Products() {
  return (
    <main>
      <div>
        <PageMark pages={pages} />
      </div>
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
            {tableItem.map((item) => (
              <>
                <TableRow className="">
                  <TableCell className="w-0.5">{item.code}</TableCell>
                  <TableCell className="">{item.category}</TableCell>
                  <TableCell className="">{item.description}</TableCell>
                  <TableCell className="">{item.price}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
