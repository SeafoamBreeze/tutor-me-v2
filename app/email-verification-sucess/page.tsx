"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();

  useEffect(() => {
    console.log("Redirecting to /sign-in")
    router.push('/sign-in')
  });

  return (
    <div className="py-20 w-full flex flex-col items-center justify-center">
      <h1 className="bg-green-300 border-white-2 rounded-md text-4xl font-bold p-4">Email Verified!</h1>
      <h1 className="text-xl pt-4">Redirecting... </h1>
    </div>
    
  )
}

export default page