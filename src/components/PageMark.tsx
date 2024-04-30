import { ChevronRight } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default function PageMark({ pages }) {
  return (
    <section className="p-4">
      <Breadcrumb className="text-zinc-400">
        <BreadcrumbList>
          {pages.map((page) => (
            <>
              <BreadcrumbItem key={page}>
                <BreadcrumbLink href={`${page === "Home" ? "/" : `/${page}`}`}>
                  {page}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight />
              </BreadcrumbSeparator>
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
