'use client';

import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PaymentFailed() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg text-center">
        <XCircle className="mx-auto text-red-500" size={64} />
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Payment Failed</h2>
        <p className="mt-2 text-gray-600">Oops! Something went wrong with your payment. Please try again.</p>
        
        <div className="mt-6 space-y-4">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={() => router.push("/checkout")}
          >
            Try Again
          </Button>
          <Button
            className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            onClick={() => router.push("/")}
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
