import React from "react";
import { Button } from "./ui/button";
import logo from "../../public/logo.png";
import Image from "next/image";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <header className=" bg-[#2A2B2F] p-6 border-b text-white">
      <div className=" container mx-auto flex items-center justify-between">
        <div>
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>
        <div className=" basis-[90%] ">
          <Input
            type="text"
            className="  border w-1/2 block mx-auto py-2 px-3 rounded-full text-white"
            placeholder="Search by name, artist or location"
          />
        </div>

        <div>
          <Button
            className=" bg-[#1ED760] text-sm px-8 font-bold hover:bg-[#1ED760] cursor-pointer "
            size={"sm"}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
