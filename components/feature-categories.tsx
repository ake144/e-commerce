import { wixClientServer } from "@/lib/wixClientServer";
import { FeaturedCategoriesClient } from "./feature-category-client";
import { products } from "@wix/stores";

const PRODUCT_PER_PAGE = 12;

const FeaturedCategories = async (
  {
    categoryId,
    limit,
    searchParams,
  }: {
    categoryId: string;
    limit?: number;
    searchParams?: any;
  }
): Promise<JSX.Element> => {
  const wixClient = await wixClientServer();

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

  const res: products.ProductsQueryResult = await productQuery.find();

  // Transform the products result to a plain object structure
  const categories = res.items.map((product: products.Product) => ({
    id: product._id || "", // Ensure this is the correct unique identifier
    name: product.name || "Unnamed Product",
    image: product.media?.items?.[0]?.image?.url || "/default-image.png", // Fallback image
    slug: product.slug || "",
  }));

  return (
    <div>
      <FeaturedCategoriesClient categories={categories} />
    </div>
  );
};

export default FeaturedCategories;