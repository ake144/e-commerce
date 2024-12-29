'use client'

import * as React from "react"
import { Grid, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ProductCard } from "@/components/shop-card"
// import { Pagination } from "@/components/pagination"
import { CategoryFilter } from "@/components/categry-filter"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import {useRouter} from 'next/navigation'

// Sample product data
const products = [
  {
    id: 1,
    name: "Porte Automatique Aluminium avec caméra",
    price: 79,
    originalPrice: 99,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Porte Automatique Aluminium",
    price: 45,
    originalPrice: 45,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Playstation 4 slim",
    price: 178,
    originalPrice: 199,
    rating: 0,
    reviews: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more products as needed
]

export default function Page() {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = React.useState([10, 178])

  const router = useRouter()

  const handleNavigation = (name:string) => {
    router.push(`/shop/${name}`);
  };


  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="container mx-auto">
      <div className="flex items-center justify-between mb-6">
           <div className="flex"> 
                 <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/">Home</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link href="/components">Components</Link>
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
      </div>
        
        </div>
        <div className="flex items-center justify-between mb-6  mt-8 border-t-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">Filters:</p>
            <Button variant="outline" size="sm">
              Clean All
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest Products</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Category</h3>
                <CategoryFilter />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Price</h3>
                <Slider
                  value={priceRange}
                  min={10}
                  max={178}
                  step={1}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-3">
            <div className={`grid ${viewMode === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-6`}>
              {products.map((product) => (
                 <div  key={product.id}   onClick={()=>handleNavigation(product.name)} className="cursor-pointer">
                  
                   <ProductCard key={product.id} product={product} viewMode={viewMode} />

                 </div>
                
              ))}
            </div>
            {/* <Pagination className="mt-6" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

