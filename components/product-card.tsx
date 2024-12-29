import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./pagination";
import { Star } from "lucide-react";


const PRODUCT_PER_PAGE = 8;

const ProductCard = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();


  const rating = 3.4

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );
  // .find();

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();


  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>

          <div className="p-4">
               <div className="text-sm text-muted-foreground mb-1">{product?.brand}</div>
               <div className="flex items-center gap-1 mb-3">
               {Array.from({ length: 5 }).map((_, i) => (
                   <Star
                   key={i}
                   className={`h-4 w-4 ${
                     i < Math.floor(rating)
                       ? "text-yellow-400 fill-yellow-400"
                       : "text-gray-300"
                   }`}
                 />
               ))}
              <span className="text-sm text-muted-foreground ml-1">{rating}</span>
          </div>
          

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="rounded-2xl ring-1 ring-pink-600 text-pink-300 w-max py-2 px-4 text-xs hover:bg-pink-600 hover:text-white">
            Add to Cart
          </button>
          </div>
        </Link>
      ))}
      {searchParams?.cat || searchParams?.name ? (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      ) : null}
    </div>
  );
};

export default ProductCard;



// <Image
//               src={product.media?.mainMedia?.image?.url || "/product.png"}
//               alt={title}
//               fill
//               className="object-cover"
//               />
//               </div>
//               <div className="p-4">
//               <div className="text-sm text-muted-foreground mb-1">{category}</div>
//               <h3 className="font-semibold mb-2">{title}</h3>
//               <div className="flex items-center gap-1 mb-3">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`h-4 w-4 ${
//                     i < Math.floor(product.rating)
//                       ? "text-yellow-400 fill-yellow-400"
//                       : "text-gray-300"
//                   }`}
//                 />
//               ))}
//               <span className="text-sm text-muted-foreground ml-1">{rating}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                   <div className="text-lg font-bold">${price.toFixed(2)}</div>
//                     <Button>
//                       click
//                     </Button>
//               </div>