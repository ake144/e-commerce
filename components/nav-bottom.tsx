'use client'

import Link from "next/link"
import { ChevronDown, LayoutGrid } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  {
    title: "Home",
    href: "/",
    hasDropdown: false
  },
  {
    title: "Shop",
    href: "/shop",
    hasDropdown: true
  },
  {
    title: "Stores",
    href: "/stores",
    hasDropdown: true
  },
  {
    title: "Mega menu",
    href: "/mega-menu",
    hasDropdown: true
  },
  {
    title: "Pages",
    href: "/pages",
    hasDropdown: true
  },
  {
    title: "Account",
    href: "/account",
    hasDropdown: true
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    hasDropdown: false
  },
  {
    title: "Docs",
    href: "/docs",
    hasDropdown: false
  }
]

const NavSecondary = () => {
  return (
    <nav className="border-b">
      <div className="container px-2 md:px-6 lg:px-12 xl:px-30 2xl:px-60 py-8  flex items-center justify-start space-x-1 h-14">
        {/* All Departments Button */}
        <Button variant="default" className="bg-green-500 hover:bg-green-600 h-10 px-4 mr-2">
          <LayoutGrid className="mr-2 h-4 w-4" />
          All Departments
        </Button>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-10 px-4 text-base font-normal"
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>
                    Option 1
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Option 2
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Option 3
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.title}
                variant="ghost"
                asChild
                className="h-10 px-4 text-base font-normal"
              >
                <Link href={item.href}>
                  {item.title}
                </Link>
              </Button>
            )
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavSecondary

