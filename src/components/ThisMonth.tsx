import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Progress } from "./ui/progress";

export default function ThisMonth() {
  return (
    <Card className="">
      <CardHeader>
        <b>This Month</b>
      </CardHeader>
      <CardContent>
        <h1>
          <b>$5,329</b>
        </h1>
        <p>+10% from last month</p>
      </CardContent>
      <CardFooter>
        <Progress value={10} />
      </CardFooter>
    </Card>
  );
}
