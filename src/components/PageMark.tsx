import { ChevronRight } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function PageMark() {
  return (
    <section className="p-4">
      <Breadcrumb className="text-zinc-400">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink>Orders</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white">
              Recent Orders
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
