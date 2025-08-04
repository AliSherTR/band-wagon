import {
  ChevronDown,
  Clock,
  Heart,
  Music,
  SlidersHorizontal,
} from "lucide-react";
import React from "react";

export default function Filters() {
  return (
    <div className=" max-w-2xl mt-4 bg-[#2A2B2F] p-4 rounded-full mx-auto text-white flex items-center justify-between text-sm">
      <div className=" grow">
        <SlidersHorizontal size={18} />
      </div>
      <div className=" grow flex items-center gap-3">
        <Music size={16} />
        <span>Genre</span>
        <ChevronDown size={18} />
      </div>
      <div className=" grow flex items-center gap-3">
        <Clock size={16} />
        <span>Time</span>
        <ChevronDown size={18} />
      </div>
      <div className=" grow flex items-center gap-3">
        <Heart size={18} />
        <span>Saved</span>
      </div>
    </div>
  );
}
