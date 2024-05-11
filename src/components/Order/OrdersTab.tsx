import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ListFilter, File } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

import OrderTable from "./OrderTable";

export default function OrdersTab() {
  return (
    <Tabs defaultValue="Week">
      <div className="flex justify-between">
        <TabsList className="flex justify-between">
          <section>
            <TabsTrigger value="Week">Week</TabsTrigger>
            <TabsTrigger value="Month">Month</TabsTrigger>
            <TabsTrigger value="Year">Year</TabsTrigger>
          </section>
        </TabsList>
        <section className="flex gap-2">
          <Button size={"sm"} className="bg-zinc-950 flex gap-2">
            <ListFilter color="white" />
            <p className="text-white">Filter</p>
          </Button>
          <Button size={"sm"} className="bg-zinc-950 flex gap-2">
            <File color="white" />
            <p className="text-white">Export</p>
          </Button>
        </section>
      </div>
      <TabsContent value="Week" className="bg-zinc-950 p-2">
        <section className="p-2">
          <h1 className="text-3xl">
            <b>Orders</b>
          </h1>
          <p>Recent orders from your store.</p>
        </section>
        <OrderTable />
      </TabsContent>
    </Tabs>
  );
}
