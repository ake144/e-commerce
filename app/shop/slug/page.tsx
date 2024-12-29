'use client'

import { useState } from 'react'
import { Share, Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductDetails from '@/components/productDetailsPage'
import { RelatedProducts } from '@/components/related-products'
import { ProductInfo } from '@/components/product-info'

export default function Page() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('250g')

  const product = {
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    rating: 4.3,
    reviews: 4,
    price: 21.6,
    originalPrice: 24,
    discount: "10% Off",
    code: "FBB00255",
    availability: "In Stock",
    type: "Fruits",
    shipping: "01 day shipping ( Free pickup today )",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ]
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      
      <ProductDetails  />
    </div>
  )
}

