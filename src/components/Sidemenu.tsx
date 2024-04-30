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
import Link from "next/link";

export default function Sidemenu() {
  return (
    <Card className="flex flex-col justify-between w-16 p-2  h-full">
      <div className="flex flex-col self-center gap-1 pt-2">
        <Button size={"icon"} className="self-center rounded-full">
          <Link href="/">
            <Package2 />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Link href="/">
            <Home />
          </Link>
        </Button>

        <Button
          size={"icon"}
          className="self-center rounded-lg active: bg-zinc-600"
        >
          <Link href="/Products">
            <ShoppingCart color="white" />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Link href="/Orders">
            <Package />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Link href="/Users">
            <UsersRound />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Link href="Analytics">
            <LineChart />
          </Link>
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
