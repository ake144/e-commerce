"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string; // Adjust type based on your actual ID type
  name: string;
  image: string;
  slug: string;
}

interface FeaturedCategoriesClientProps {
  categories: Category[];
}

export function FeaturedCategoriesClient({ categories }: FeaturedCategoriesClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = scrollRef;

    if (!current) return;

    const interval = setInterval(() => {
      const scrollAmount = current.offsetWidth;
      const maxScrollLeft = current.scrollWidth - current.offsetWidth;

      if (current.scrollLeft + scrollAmount >= maxScrollLeft) {
        current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      const offset = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
          {categories.map((category) => (
            <div key={category.id} className="flex-shrink-0 w-[200px] group cursor-pointer">
              <Link   href={"/" + category.slug}>
             
              <div className=" rounded-lg p-6 transition-all duration-200 shadow-lg border hover:border-green-500 group-hover:shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="object-contain mb-4 "
                />
                <h3 className="text-center font-medium text-gray-600">{category.name}</h3>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}