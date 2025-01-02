import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import  ProductCard  from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { HeroSection } from "@/components/hero-section";
import CategoryList from "@/components/category-list";
import { Suspense } from "react";
import Skeleton from "@/components/skeleton";

import { PromoBanners } from "@/components/promo-banner";
import FeaturedCategories from "@/components/feature-categories";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8"> 
    
      <HeroSection />
          <Suspense fallback={<Skeleton />}>
             <FeaturedCategories 
              categoryId={process.env.ALL_PRODUCTS_CATEGORY_ID!}
               limit={18}/>
          </Suspense>
      <PromoBanners  />


      <section className="my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <Button variant="link">View All</Button>
        </div>
        <Suspense fallback={<Skeleton />}>
          <ProductCard
           categoryId={process.env.ALL_PRODUCTS_CATEGORY_ID!}
             limit={15}
          />
          </Suspense>
      </section>

          <section className="my-12">
              <h1 className="text-2xl  font-bold px-4 md:px-8 lg:px-16 xl:32 mb-12 ">Categories</h1>
             <Suspense fallback={<Skeleton />}>
                <CategoryList />
              </Suspense>
          </section>

      <section className="my-12">
        <h1 className="text-2xl font-bold mb-6">Featured Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryCard
            categoryId={process.env.FEATURED_CATEGORY_ID!}
            limit={4}
            />
          </Suspense>
      </section>

      <section className="my-12">
        <Card className="bg-green-50 dark:bg-green-950 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get Fresh Deals</h2>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter and receive exclusive offers every week
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full md:w-[300px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}