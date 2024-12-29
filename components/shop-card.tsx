import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: {
    name: string
    price: number
    originalPrice: number
    rating: number
    reviews: number
    image: string
  }
  viewMode: "grid" | "list"
}

export function ProductCard({ product, viewMode }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className={`p-0 ${viewMode === "list" ? "flex" : ""}`}>
        <div className={viewMode === "list" ? "w-1/3" : ""}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className={`p-4 ${viewMode === "list" ? "w-2/3" : ""}`}>
          <h3 className="font-semibold mb-2">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

