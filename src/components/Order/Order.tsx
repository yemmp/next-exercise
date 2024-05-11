import {
  Truck,
  EllipsisVertical,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

export default function Order() {
  return (
    <Card>
      <CardHeader className="flex-row justify-between bg-zinc-900">
        <section>
          <CardTitle>Order Oe31b70H</CardTitle>
          <CardDescription className="pt-2">
            Date:November 23,2023
          </CardDescription>
        </section>
        <section className="flex gap-2">
          <Button size={"icon"} className="bg-zinc-950">
            <Truck color="white" />
          </Button>
          <Button size={"icon"} className="bg-zinc-950">
            <EllipsisVertical color="white" />
          </Button>
        </section>
      </CardHeader>
      <CardContent className="flex-col">
        <section>
          <b>Order Details</b>
          <section className="flex-col">
            <span className="flex justify-between pt-1">
              <p>Glimmer Lamps x2 </p> <b>$250.00</b>
            </span>
            <span className="flex justify-between py-1">
              <p>Aqua Filters x1 </p> <b>$49.00</b>
            </span>
          </section>
          <hr />
          <section>
            <span className="flex justify-between pt-1">
              <p>Subtotal </p> <b>$299.00</b>
            </span>
            <span className="flex justify-between pt-1">
              <p>Shipping </p> <b>$5.00</b>
            </span>
            <span className="flex justify-between pt-1">
              <p>Tax </p> <b>$25.00</b>
            </span>
            <span className="flex justify-between py-1">
              <p>Total </p> <b>$329.00</b>
            </span>
          </section>
          <hr />
          <section>
            <span className="flex gap-28 pt-2">
              <b>Shipping Information</b> <b>Billing Information</b>
            </span>
            <span className="flex gap-32 py-1">
              <p>
                Liam Johnson<br></br> 1234 Main St. <br></br> Anytown, CA 12345
              </p>
              <p>
                Same as shipping <br></br>address
              </p>
            </span>
          </section>
          <hr />
          <section className="flex-col pt-2">
            <b>Customer Information</b>
            <span className="flex justify-between pt-1">
              <p>Customer</p> <b>Liam Johnson</b>
            </span>
            <span className="flex justify-between pt-1">
              <p>Email</p> <b>liam@acme.com</b>
            </span>
            <span className="flex justify-between py-1">
              <p>Phone</p> <b>+1 234 567 890</b>
            </span>
          </section>
          <hr />
          <section className="flex-col pt-2">
            <b>Paymaent Information</b>
            <span className="flex justify-between py-2">
              <p className="flex">
                <CreditCard />
                Visa
              </p>
              <b>**** **** **** 4532</b>
            </span>
          </section>
        </section>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 bg-zinc-900">
        <small>Updated November 23,2023</small>
        <section className="flex gap-2">
          <Button size="icon" className="bg-zinc-950">
            <ChevronLeft color="white" />
          </Button>
          <Button size={"icon"} className="bg-zinc-950">
            <ChevronRight color="white" />
          </Button>
        </section>
      </CardFooter>
    </Card>
  );
}
