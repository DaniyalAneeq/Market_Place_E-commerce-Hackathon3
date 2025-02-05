import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-poppins font-bold text-3xl mt-6">Welcome to the sign in page</h1>
    <div className="flex items-center justify-center min-h-screen"> 
      <SignIn />
    </div>
    </div>
  );
}