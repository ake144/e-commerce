'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from 'lucide-react'
import { useEffect, useState } from "react"

const Slides = [
  {
    id: 1,
    title: "SuperMarket For Fresh Grocery",
    subtitle: "Opening Sale Discount 50%",
    description: "Introduced a new model for online grocery shopping and convenient home delivery.",
    url: '/',
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=100&w=1920",
    badge: {
      title: "Kiwi - 4 pcs",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=100&w=100"
    },
    bg: "from-green-900/50 to-emerald-900/50"
  },
  {
    id: 2,
    title: "Fresh Vegetables & Fruits",
    subtitle: "Winter Special Offer",
    description: "Get fresh, hand-picked produce delivered right to your doorstep with up to 30% off.",
    url: '/',
    img: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=100&w=1920",
    badge: {
      title: "Avocado",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=100&w=100"
    },
    bg: "from-orange-900/50 to-yellow-900/50"
  },
  {
    id: 3,
    title: "Organic Food Collection",
    subtitle: "Spring Harvest Sale",
    description: "Discover our premium selection of organic produce at special spring prices.",
    url: '/',
    img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=100&w=1920",
    badge: {
      title: "Fresh Greens",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=100&w=100"
    },
    bg: "from-blue-900/50 to-green-900/50"
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === Slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[calc(100vh-300px)] overflow-hidden rounded-lg">
      <div className="w-max h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {Slides.map((slide) => (
          <div className="relative w-screen h-full" key={slide.id}>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`} />
            <div className="relative h-full container mx-auto px-6 py-24 sm:px-12 sm:py-32">
              <div className="max-w-2xl space-y-8">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2 bg-white text-black">
                  {slide.subtitle}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 drop-shadow">{slide.description}</p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100">
                    View Deals
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <img src={slide.badge.image} alt={slide.badge.title} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{slide.badge.title}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      <span className="text-sm text-gray-600">{slide.badge.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex gap-4">
        {Slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
