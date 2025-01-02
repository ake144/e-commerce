"use client";

import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import NavSecondary from "./nav-bottom";
import SearchBar from "./searchBar";
import dynamic from "next/dynamic";


const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <ShoppingCart className="h-6 w-6 text-green-500" />
            ETShop
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-xl relative">
            {/* <Input
              type="search"
              placeholder="Search for products..."
              className="w-full"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" /> */}

            <SearchBar  />
          </div>

          <div className="flex items-center gap-4">
               <NavIcons  />
            </div>
          
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div>
           <NavSecondary />
        </div>

      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
           <SearchBar  />
          <nav className="flex flex-col gap-2">
            <Link href="/categories" className="p-2 hover:bg-accent rounded-md">
              Home
            </Link>
            <Link href="/deals" className="p-2 hover:bg-accent rounded-md">
              Shop store
            </Link>
            <Link href="/account" className="p-2 hover:bg-accent rounded-md">
              DOcs
            </Link> // AUTH WITH WIX-MANAGED AUTH
            <Link href="/account" className="p-2 hover:bg-accent rounded-md">
              Mega menu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}