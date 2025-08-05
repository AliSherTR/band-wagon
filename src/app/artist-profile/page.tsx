import { Button } from "@/components/ui/button";
import {
  Calendar1Icon,
  Facebook,
  InstagramIcon,
  MapPin,
  Music,
  Twitter,
} from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className=" text-white">
      <h1 className=" text-lg tracking-wider mb-14">andywarhool234</h1>
      <div className=" flex gap-22">
        <div className=" h-46 w-46 rounded-full overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/994280546/photo/passionate-singer-playing-the-guitar-and-recording-song-in-studio.jpg?s=612x612&w=0&k=20&c=MvAY7l1ZVL8RhQNIsoj4BD-GuWqOOjF411eW2LOMmGU="
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <div className=" flex items-center gap-8 mb-8">
            <h1 className="tracking-wider">andywarhool234</h1>
            <Button variant={"ghost"} className=" bg-[#2A2B2F] w-28">
              Favourite
            </Button>
            <Button variant={"ghost"} className=" bg-[#2A2B2F] w-28">
              Saved
            </Button>
          </div>

          <div className=" flex gap-8 mb-6">
            <p className=" text-sm">
              {" "}
              <span className=" font-bold ">15+</span> Live Shows{" "}
            </p>
            <p className=" text-sm">
              {" "}
              <span className=" font-bold ">15+</span> Years Performing{" "}
            </p>
          </div>

          <h1 className=" text-lg tracking-wider mb-4">Andy Warhool</h1>

          <div className=" space-y-2">
            <div className=" flex gap-3 items-center text-sm">
              <MapPin size={17} />
              <p>New York, NY</p>
            </div>
            <div className=" flex gap-3 items-center text-sm">
              <Music size={17} />
              <p>Rock, Pop, Jazz</p>
            </div>
          </div>

          <p className=" w-[50%] mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className=" w-[50%] mt-8 p-6 bg-[#2A2B2F] rounded-md">
            <h1 className=" text-center text-sm mb-4">Next Shows</h1>
            <div className=" flex justify-between">
              <div className=" flex gap-3 items-center text-sm">
                <Calendar1Icon size={17} />
                <p>Jan 20, 2023</p>
              </div>
              <div className=" flex gap-3 items-center text-sm">
                <MapPin size={17} />
                <p>New York, NY</p>
              </div>
            </div>

            <div className=" flex justify-between mt-4 mb-8">
              <div className=" flex gap-3 items-center text-sm">
                <Calendar1Icon size={17} />
                <p>Jan 20, 2023</p>
              </div>
              <div className=" flex gap-3 items-center text-sm">
                <MapPin size={17} />
                <p>New York, NY</p>
              </div>
            </div>

            <div className=" flex justify-between gap-4">
              <Button
                variant={"outline"}
                className=" grow rounded-full border-[#1ED760] hover:bg-transparent text-[#1ED760]  hover:text-[#1ED760] cursor-pointer bg-transparent"
              >
                View Details
              </Button>
              <Button className=" grow rounded-full bg-[#1ED760] hover:bg-[#1ED760] border-[#1ED760]  hover:text-black cursor-pointer text-black">
                Check In
              </Button>
            </div>
          </div>
          <div className=" mt-4 text-sm">
            <h1 className=" mb-2">Social Links</h1>

            <div className=" flex gap-2 items-center">
              <Facebook />
              <InstagramIcon />
              <Twitter />
            </div>
            <Button
              variant={"outline"}
              className=" grow rounded-full my-4 w-1/2 border-[#1ED760] hover:bg-transparent text-[#1ED760]  hover:text-[#1ED760] cursor-pointer bg-transparent"
            >
              View Upcoming and Past Shows
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
