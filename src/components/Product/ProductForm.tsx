"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";

const newProductSchema = z.object({
  category: z.string(),
  description: z
    .string()
    .min(5, "Product description must have at least 5 letters"),
  price: z.string(),
});

type TNewProduct = z.infer<typeof newProductSchema>;

export default function ProductForm() {
  const { register, handleSubmit, reset } = useForm<TNewProduct>({
    resolver: zodResolver(newProductSchema),
  });
  const onSubmit = async (data: unknown) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col gap-4 text-black"
    >
      <input
        {...register("category")}
        type="text"
        placeholder="Product Category"
        className="px-4 py-2 rounded"
      />
      <input
        {...register("description")}
        type="text"
        placeholder="Product Description"
        className="px-4 py-2 rounded"
      />
      <input
        {...register("price")}
        type="text"
        placeholder="Product Price"
        className="px-4 py-2 rounded"
      />
      <Button
        type="submit"
        className="bg-green-600 p-4 rounded font-black text-white text-xl"
      >
        SUBMIT
      </Button>
    </form>
  );
}
