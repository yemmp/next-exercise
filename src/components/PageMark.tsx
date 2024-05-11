import { ChevronRight, Search } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Searchbar from "./Searchbar";
const Separator = () => (
  <BreadcrumbSeparator>
    <ChevronRight />
  </BreadcrumbSeparator>
);
export default function PageMark({ pages }: { pages: string[] }) {
  return (
    <div className="flex  justify-between w-full h-1/4 pt-3 ">
      <section className="p-4">
        <Breadcrumb className="text-zinc-400">
          <BreadcrumbList>
            {pages.map((page, index) => (
              <>
                <BreadcrumbItem key={page}>
                  <BreadcrumbLink
                    href={`${page === "Home" ? "/" : `/${page}`}`}
                  >
                    {page}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < pages.length - 1 ? <Separator /> : null}
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <Searchbar />
    </div>
  );
}
