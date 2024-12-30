export const dynamic = "force-dynamic"; // Ensure dynamic rendering

import Filter from "@/components/Filter";
import  ProductCard  from "@/components/product-card";
import Skeleton from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  
  const wixClient = await wixClientServer();
  const category = searchParams.cat || "all-products";

  const cat = await wixClient.collections.getCollectionBySlug(category);
  console.log(cat);


    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 ">
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                <div className="w-2/3 flex flex-col justify-center items-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 40%</h1>
                    <Button className="rounded-3xl text-white bg-red-300 w-max py-3 px-5 text-sm">Buy Now</Button>
                </div>
                <div className="relative w-1/3">
                    <Image src='https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' fill className='object-contain' />
                </div>
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <section className="my-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Products For You</h2>
                    </div>

                    <Suspense fallback={<Skeleton/>}>
                        <ProductCard
                          categoryId={
                            cat.collection?._id || "00000000-000000-000000-000000000001"
                          }
                          searchParams={searchParams}
                        />
                      </Suspense>
                        
                        
                        {/* <ProductCard
                            title="Organic Bananas"
                            price={4.99}
                            image="https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=300"
                            category="Fruits"
                            rating={4.5}
                        />
                        <ProductCard
                            title="Fresh Milk"
                            price={3.99}
                            image="https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300"
                            category="Dairy"
                            rating={4.8}
                        /> */}
                        {/* Add more products */}
                </section>
            </div>
        </div>
    );
};

export default ListPage;