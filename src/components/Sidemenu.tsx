import {
  Package2,
  Home,
  ShoppingCart,
  Package,
  UsersRound,
  LineChart,
  Settings,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Sidemenu() {
  return (
    <Card className="flex flex-col justify-between w-16 p-2  h-full">
      <div className="flex flex-col self-center gap-1 pt-2">
        <Button size={"icon"} className="self-center rounded-full">
          <Package2 />
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Home />
        </Button>

        <Button
          size={"icon"}
          className="self-center rounded-lg active: bg-zinc-600"
        >
          <ShoppingCart color="white" />
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Package />
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <UsersRound />
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <LineChart />
        </Button>
      </div>

      <div className="self-center">
        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Settings />
        </Button>
      </div>
    </Card>
  );
}
