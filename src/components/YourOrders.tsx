import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export default function YourOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Orders</CardTitle>
      </CardHeader>
      <CardContent>
        Introducing Our Dynamic Orders Dashboard for Seamless Management and
        Insightful Analysis.
      </CardContent>
      <CardFooter>
        <Button>Create New Order</Button>
      </CardFooter>
    </Card>
  );
}
