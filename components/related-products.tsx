import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const relatedProducts = [
  {
    id: 1,
    name: "Haldiram's Sev Bhujia",
    category: "Snack & Munchies",
    price: 21.6,
    originalPrice: 24,
    rating: 4.3,
    reviews: 4,
    image: "/placeholder.svg?height=200&width=200",
    badge: { text: "10% Off", color: "bg-green-500" },
  },
  {
    id: 2,
    name: "NutriChoice Digestive",
    category: "Bakery & Biscuits",
    price: 24,
    originalPrice: 24,
    rating: 4.3,
    reviews: 4,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Cadbury 5 Star Chocolate",
    category: "Bakery & Biscuits",
    price: 35,
    originalPrice: 35,
    rating: 4.3,
    reviews: 4,
    image: "/placeholder.svg?height=200&width=200",
    badge: { text: "Buy 1 Get $4.00 Off", color: "bg-red-500" },
  },
  {
    id: 4,
    name: "Onion Flavour Potato",
    category: "Snack & Munchies",
    price: 3,
    originalPrice: 5,
    rating: 4.3,
    reviews: 4,
    image: "/placeholder.svg?height=200&width=200",
    badge: { text: "Hot", color: "bg-red-500" },
  },
]

export function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {product.badge && (
                <span
                  className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${product.badge.color}`}
                >
                  {product.badge.text}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h3 className="font-medium mb-2 truncate">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted-foreground">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

