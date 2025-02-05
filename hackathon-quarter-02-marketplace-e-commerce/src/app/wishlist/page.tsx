"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

interface WishItem {
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  description: string;
  slug: string;
}

function WishList() {
  const [wishList, setWishList] = useState<{ [key: string]: WishItem }>({});
  const router = useRouter();

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wish") || "{}");
    setWishList(storedWishList);
  }, []);

  // Delete an item from the wishlist
  const handleDelete = (title: string) => {

    Swal.fire({
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if(result.isConfirmed){
        const updatedWishList = { ...wishList };
        delete updatedWishList[title];

        setWishList(updatedWishList);
        localStorage.setItem("wish", JSON.stringify(updatedWishList));


        window.dispatchEvent(new Event("wishListUpdated"));

        Swal.fire({
          title: "Item deleted successfully!",
          text: "You can always add it back later.",
          icon: "success",
          confirmButtonText: "OK",
        })
      }
    })

  };

  // Add an item to the cart
  const handleAddToCart = (item: WishItem) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");

    if (cart[item.title]) {

      Swal.fire({
        title: "Item already exist in the cart!",
        text: "Quantity has been updated.",
        icon: "success",
        confirmButtonText: "OK",
      })
      // If item already exists in cart, increase its quantity
      cart[item.title] = {
        ...cart[item.title],
        quantity: cart[item.title].quantity + item.quantity,
      };
    } else {

      Swal.fire({
        title: "Item added successfully!",
        text: "You can always update the quantity in the cart.",
        icon: "success",
        confirmButtonText: "OK",
      })
      // If item doesn't exist in cart, add it
      cart[item.title] = { ...item, quantity: item.quantity };
    }

    // Update cart in localStorage and state
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    // alert(`${item.title} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Your Wishlist</h1>

      {Object.keys(wishList).length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(wishList).map((key) => {
            const item = wishList[key];
            return (
              <div
                key={key}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="w-full h-48 relative mb-4">
                  {item.imageUrl ? (
                    <Link href={`/shop/${item.slug}`} className="w-full h-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-fill rounded-lg hover:scale-105 transition-transform duration-500"
                      />
                      </Link>
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">
                    <span className="font-medium">Price:</span> ${item.price}
                  </p>
                  <p className="line-clamp-2 text-muted-foreground">{item.description}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-[#007580] text-white px-4 py-2 rounded-md hover:bg-[#005f6b] transition-colors duration-300"
                  >
                    Add to Cart
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item.title)}
                    className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <AiTwotoneDelete className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">Your wishlist is empty.</p>
          <button
            onClick={() => router.push("/shop")}
            className="mt-4 bg-[#007580] text-white px-6 py-2 rounded-md hover:bg-[#005f6b] transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default WishList;