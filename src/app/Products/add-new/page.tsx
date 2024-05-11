import PageMark from "@/components/PageMark";
import ProductForm from "@/components/Product/ProductForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function NewProductPage() {
  return (
    <article>
      <div>
        <PageMark pages={["Home", "Products", "Add New Product"]} />
      </div>
      <div></div>
      <Card className="text-center w-1/3 ">
        <CardHeader>
          <h2>Add a New Product to the list</h2>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>
    </article>
  );
}
