import React from "react";
import { Button } from "./ui/button";
import { AlarmClock, CalendarCheck, MapPin, Music } from "lucide-react";

export default function MapMarker() {
  return (
    <div className="w-full pb-12">
      <div className="flex justify-between items-center w-full border-b py-4">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 overflow-hidden bg-gray-300 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-stylish-lead-singer-performing-260nw-2548521769.jpg"
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" flex flex-col">
            <span className="font-semibold  -translate-y-1 tracking-wide ">
              Andy Warhool
            </span>
            <span className=" tracking-widest ">Artist</span>
          </div>
        </div>
        <Button
          variant={"outline"}
          className=" rounded-full border-[#1ED760] hover:bg-transparent text-[#1ED760]  hover:text-[#1ED760] cursor-pointer bg-transparent"
        >
          View Profile
        </Button>
      </div>

      <div className=" p-5 flex items-center justify-center border mt-3 mb-5">
        <div>
          <h6 className="text-center font-bold text-lg tracking-wide">853</h6>
          <span className=" text-center">Check-ins</span>
        </div>
      </div>

      <div className=" space-y-4 mb-5">
        <div className=" flex items-center gap-2">
          <CalendarCheck size={18} />
          <span>01-Dec-2025</span>
        </div>
        <div className=" flex items-center gap-2">
          <AlarmClock size={18} />
          <span>10:00 AM - 12:00 PM</span>
        </div>

        <div className=" flex items-center gap-2">
          <MapPin size={18} />
          <span>Gulberg Greens, Islamabad Pakistan</span>
        </div>

        <div className=" flex items-center gap-2">
          <Music size={18} />
          <span>Music, Pop, Rock</span>
        </div>
      </div>

      <Button
        variant={"outline"}
        className=" w-full rounded-full border-[#1ED760] hover:bg-transparent text-[#1ED760]  hover:text-[#1ED760] cursor-pointer bg-transparent"
      >
        Check In
      </Button>
    </div>
  );
}
