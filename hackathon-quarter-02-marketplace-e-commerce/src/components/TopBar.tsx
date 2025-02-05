"use client";

import Image from "next/image";
import check from "../../public/check 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiErrorWarningLine } from "react-icons/ri";
import Logo from "../../public/Logo Icon.png";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";


const TopBar = () => {
  // State to track the number of items in the cart
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setwishCount] = useState(0);

  const { isSignedIn } = useUser();

  // Function to update the cart count
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const count = Object.keys(cart).length;
    setCartCount(count);
  };

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

  // Load cart items from localStorage on component mount
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

  return (
    <>
      <div className="bg-[#272343] w-full py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <Image
              src={check}
              alt="check"
              height={16}
              width={16}
              className="w-auto h-auto"
            />
            <p className="font-inter font-normal text-xs sm:text-sm text-white text-center">
              Free shipping on all orders over $50
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center text-white">
              <p className="font-inter font-normal text-xs sm:text-sm">Eng</p>
              <RiArrowDropDownLine className="text-xl" />
            </div>
            <p className="font-inter font-normal text-xs sm:text-sm text-white">
              Faqs
            </p>
            <div className="flex items-center gap-1">
              <RiErrorWarningLine className="text-white/70" />
              <p className="font-inter font-normal text-xs sm:text-sm text-white">
                Need Help
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F0F2F3] py-4 sm:py-5 px-4 sm:px-6 lg:px-8 hidden md:inline-block">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
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

          <div className="flex gap-8 items-center justify-center">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-sm">
              <ShoppingCart className="w-4 sm:w-5 h-auto" />
              <Link
                href="/cart"
                className="font-inter font-medium text-xs sm:text-sm text-[#272343]"
              >
                Cart
              </Link>
              <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                <p className="font-medium text-[10px] text-white">
                  {cartCount}
                </p>
              </div>
            </div>

            <Link href={"/wishlist"}>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-sm">
                <Heart className="w-4 sm:w-5 h-auto" />
                <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#007580] rounded-full flex items-center justify-center">
                  <p className="font-medium text-[10px] text-white">
                    {wishCount}
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              {!isSignedIn && 
                <>
              <Link href="/sign-in" className="hover:text-gray-300 bg-blue-300 p-2 rounded-lg">
                Sign In
              </Link>
              <Link href="/sign-up" className="hover:text-gray-300">
                Sign Up
              </Link>
              </>
              }
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
