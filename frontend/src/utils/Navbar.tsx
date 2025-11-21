import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className=" text-white bg-gray-900 h-15 flex items-center justify-between p-5">
      <div>Logo</div>
      <div className="flex gap-4 rounded-xl">
        <Button
          variant="secondary"
          className="  text-white bg-gray-800 cursor-pointer"
        >
          create Problem
        </Button>
        <Button
          variant="secondary"
          className=" text-white bg-gray-800 cursor-pointer"
        >
          Solved Problems
        </Button>
        <SignedIn>
          <Button variant="secondary" className=" text-white bg-gray-700 ">
            <SignOutButton />
          </Button>
        </SignedIn>
        <SignedOut>
          <Button variant="secondary" className=" text-white bg-gray-700 ">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
