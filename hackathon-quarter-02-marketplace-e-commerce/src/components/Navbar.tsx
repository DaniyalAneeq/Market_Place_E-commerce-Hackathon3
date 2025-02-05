"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo Icon.png";
import { Heart, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname
import { useEffect, useState } from "react";



const Navbar = () => {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setwishCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const count = Object.keys(cart).length;
    setCartCount(count);
  };

  useEffect(() => {
    updateCartCount(); // Initial load

    // Listen for custom events to update the cart count
    const handleCartUpdate = () => {
      updateCartCount();
    };

    // Add event listener for custom event
    window.addEventListener("cartUpdated", handleCartUpdate);

    // Cleanup event listener
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const updateWishCount = () => {
    const whishList = JSON.parse(localStorage.getItem("wish") || "{}");
    const wishcount = Object.keys(whishList).length;
    setwishCount(wishcount);
  };

  useEffect(() => {
    updateWishCount(); // Initial load

    const handleWishUpdate = () => {
      updateWishCount();
    };

    window.addEventListener("wishListUpdated", handleWishUpdate);

    return () => {
      window.removeEventListener("wishListUpdated", handleWishUpdate);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center h-[74px]">
        <div className="md:flex gap-4 font-inter font-medium text-lg leading-[15.4px] items-center hidden md:ml-6 xl:ml-0">
          <Link
            href="/"
            className={`hover:scale-110  ${
              pathname === "/" ? "text-[#007580]" : "text-[#636270]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`hover:scale-110 ${
              pathname === "/shop" ? "text-[#007580]" : "text-[#636270]"}`}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className={`hover:scale-110 ${
              pathname === "/product" ? "text-[#007580]": "text-[#636270]"
              }`}
          >
            Product
          </Link>
          <Link
            href="/pages"
            className={`hover:scale-110 ${
              pathname === "/pages" ? "text-[#007580]": "text-[#636270]"
              }`}
          >
            Pages
          </Link>
          <Link
            href="/about"
            className={`hover:scale-110 ${
              pathname === "/about" ? "text-[#007580]": "text-[#636270]"
              }`}
          >
            About
          </Link>
        </div>
        <div className="flex gap-2 items-center md:mr-6 ">
          <Link
            href="/contact"
            className={`font-inter font-normal text-sm leading-[15.4px] hidden md:inline-block hover:scale-110 ${
              pathname === "/contact" ? "text-[#007580]" : "text-[#636270]"
              }`}
          >
            Contact:
          </Link>
          <Link
            href="/contact"
            className={`font-inter font-medium text-sm leading-[15.4px] hidden md:inline-block`}
          >
            (808) 555-0111
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu className="ml-4 md:hidden" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={40}
                      height={40}
                      className="w-8 sm:w-10 h-auto"
                    />
                    <Link
                      href="/"
                      className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]"
                    >
                      Comforty
                    </Link>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-8 font-inter font-medium text-sm leading-[15.4px] items-center mt-4">
                    <Link
                      href="/"
                      className={`hover:scale-110  ${
                        pathname === "/" ? "text-[#007580]" : "text-[#636270]"
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/shop"
                      className={`hover:scale-110 ${
                        pathname === "/shop" ? "text-[#007580]" : "text-[#636270]"
                      }`}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/product"
                      className={`hover:scale-110 ${
                        pathname === "/product" ? "text-[#007580]" : "text-[#636270]"
                      }`}
                    >
                      Product
                    </Link>
                    <Link
                      href="/pages"
                      className={`hover:scale-110 ${
                        pathname === "/pages" ? "text-[#007580]" : "text-[#636270]"
                      }`}
                    >
                      Pages
                    </Link>
                    <Link
                      href="/about"
                      className={`hover:scale-110 ${
                        pathname === "/about" ? "text-[#007580]" : "text-[#636270]"
                      }`}
                    >
                      About
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[#636270] font-inter font-normal text-sm leading-[15.4px] hover:scale-110 "
                    >
                      Contact
                    </Link>
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 sm:w-5 h-auto" />
                      <Link
                        href="/cart"
                        className="font-inter font-medium text-xs sm:text-sm text-[#272343]"
                      >
                        Cart
                      </Link>
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                        <p className="font-medium text-[10px] text-white">{cartCount}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 sm:w-5 h-auto" />
                      <Link
                        href="/wishlist"
                        className="font-inter font-medium text-xs sm:text-sm text-[#272343]"
                      >
                        Wishlist
                      </Link>
                      <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                        <p className="font-medium text-[10px] text-white">{wishCount}</p>
                      </div>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
