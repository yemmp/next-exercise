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
import React from "react";

const menuItems = [
  { icon: <Package2 />, route: "/", variant: "" },
  { icon: <Home />, route: "/", variant: "ghost" },
  { icon: <ShoppingCart />, route: "/products", variant: "ghost" },
  { icon: <Package />, route: "/orders", variant: "ghost" },
  { icon: <UsersRound />, route: "/users", variant: "ghost" },
  { icon: <LineChart />, route: "/analytics", variant: "ghost" },
];

export default function Sidemenu() {
  return (
    <Card className="flex flex-col justify-between w-16 p-2  h-full rounded-none">
      <div className="flex flex-col self-center gap-2 pt-2">
        {menuItems.map((item) => (
          <React.Fragment key={item.route}>
            <SidemenuItems menuItem={item} />
          </React.Fragment>
        ))}
      </div>

      {/* Settings */}
      <div className="self-center">
        <Button
          size={"icon"}
          variant="ghost"
          className="self-center rounded-lg"
        >
          <Link href="/settings">
            <Settings />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

function SidemenuItems({
  menuItem,
}: {
  menuItem: { icon: React.JSX.Element; route: string; variant: any };
}) {
  return (
    <Button
      size={"icon"}
      variant={menuItem.variant}
      className="self-center rounded-full"
    >
      <Link href={`${menuItem.route}`}>{menuItem.icon}</Link>
    </Button>
  );
}
