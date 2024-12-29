'use client'

import Link from "next/link"
import { useState } from "react"
import { ProductGallery } from "./product-gallery"
import { ChevronRight, Heart, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { RelatedProducts } from "./related-products"
import { ProductInfo } from "./product-info"

const ProductDetails=()=>{
    
    const [selectedSize, setSelectedSize] = useState("500g")
    const [quantity, setQuantity] = useState(1)
    
    return(
        <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-green-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="text-green-500 hover:underline">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-muted-foreground">name</span>
          </nav>
  
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product Gallery */}
            <ProductGallery />
  
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-green-500 mb-2">Snack & Munchies</p>
                <h1 className="text-3xl font-bold mb-4">Haldiram&apos;s Sev Bhujia</h1>
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-muted-foreground">(4 reviews)</span>
                </div>
              </div>
  
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold">$21.6</span>
                <span className="text-xl text-muted-foreground line-through">$24</span>
                <span className="text-red-500">10% Off</span>
              </div>
  
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Size</p>
                  <div className="flex gap-4">
                    {["250g", "500g", "1kg"].map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
  
                <div>
                  <p className="font-medium mb-2">Quantity</p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
  
              <div className="flex gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
  
              <Card className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">Product Code:</p>
                    <p>FBB00255</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Type:</p>
                    <p>Fruits</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Availability:</p>
                    <p>In Stock</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shipping:</p>
                    <p>01 day shipping ( Free pickup today )</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
  
          {/* Product Tabs */}
          <Tabs defaultValue="details" className="mb-12">
            <TabsList>
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="information">Information</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="seller">Seller Info</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <ProductInfo />
            </TabsContent>
            <TabsContent value="information">
              <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </TabsContent>
            <TabsContent value="reviews">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </TabsContent>
            <TabsContent value="seller">
              <h3 className="text-xl font-semibold mb-4">Seller Information</h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </TabsContent>
          </Tabs>
  
          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Items</h2>
            <RelatedProducts />
          </div>
        </div>
      </div>
    )
}


export default ProductDetails