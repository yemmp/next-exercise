import { Progress } from "./ui/progress";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";

export default function ThisWeek() {
  return (
    <Card className="">
      <CardHeader>
        <b>This Week</b>
      </CardHeader>
      <CardContent>
        <h1>
          <b>$1,329</b>
        </h1>
        <p>+25% from last week</p>
      </CardContent>
      <CardFooter>
        <Progress value={25} />
      </CardFooter>
    </Card>
  );
}
