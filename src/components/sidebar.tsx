"use client";

import React, { useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  LogOut,
  MapPin,
  Settings,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className="flex gap-4">
      {/* Collapsed Sidebar */}
      <div className="bg-[#2A2B2F] flex flex-col gap-6 items-center px-5 py-6 rounded-full text-white">
        <div className="h-10 w-10 flex items-center justify-center bg-[#1ED760]/50 rounded-full">
          <MapPin size={20} />
        </div>
        <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <User2 size={20} />
        </div>
        <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <Bell size={20} />
        </div>
        <div className="h-10 w-10 mt-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <Settings size={20} />
        </div>
        <div className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <LogOut size={20} />
        </div>
        <Button
          onClick={toggleSidebar}
          className="font-bold h-10 w-10 mt-5 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform"
        >
          <ChevronRight
            size={20}
            className="text-green-600 font-bold"
            strokeWidth={4}
          />
        </Button>
      </div>

      {/* Expanded Sidebar with Animation */}
      <div
        className={`
        bg-[#2A2B2F] flex flex-col gap-6 px-12 py-6 rounded-[50px] text-white
        transition-all duration-500 ease-in-out transform
        ${
          isExpanded
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95 pointer-events-none"
        }
      `}
      >
        <div className="h-10 w-full flex items-center justify-start gap-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer px-2">
          <MapPin size={20} />
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Explore
          </span>
        </div>
        <div className="h-10 flex items-center gap-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer px-2">
          <User2 size={20} />
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Profile
          </span>
        </div>
        <div className="h-10 flex items-center gap-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer px-2">
          <Bell size={20} />
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Notifications
          </span>
        </div>
        <div className="h-10 flex items-center gap-4 mt-10 rounded-full hover:bg-white/10 transition-colors cursor-pointer px-2">
          <Settings size={20} />
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Settings
          </span>
        </div>
        <div className="h-10 flex items-center gap-4 rounded-full hover:bg-white/10 transition-colors cursor-pointer px-2">
          <LogOut size={20} />
          <span
            className={`transition-all duration-300 ${
              isExpanded ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            Logout
          </span>
        </div>
        <Button
          onClick={toggleSidebar}
          className="font-bold h-10 w-10 mt-5 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition-transform"
        >
          <ChevronLeft
            size={20}
            className="text-green-600 font-bold"
            strokeWidth={4}
          />
        </Button>
      </div>
    </aside>
  );
}
