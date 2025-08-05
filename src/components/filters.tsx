import {
  ChevronDown,
  Clock,
  Heart,
  Music,
  SlidersHorizontal,
} from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Filters() {
  const genres = [
    "Rock",
    "Pop",
    "Jazz",
    "Classical",
    "Hip Hop",
    "Electronic",
    "Country",
    "R&B",
    "Folk",
    "Reggae",
    "Blues",
    "Metal",
    "Punk",
    "Alternative",
    "Indie",
    "Soul",
    "Funk",
    "Gospel",
  ];

  const timeOptions = [
    "Anytime",
    "Today",
    "This Week",
    "This Month",
    "Past 3 Months",
    "Past 6 Months",
    "Past Year",
  ];

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  // Handle checkbox toggle and prevent dropdown closure
  const handleCheckboxClick = (genre: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // Handle clearing all selections
  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedGenres([]);
  };

  const handleApplyFilters = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="max-w-2xl mt-4 bg-[#2A2B2F] p-4 rounded-full mx-auto text-white flex items-center justify-between text-sm">
      {/* Filters Icon */}
      <div className="grow">
        <SlidersHorizontal size={18} />
      </div>

      {/* Genre Dropdown */}
      <div className="grow">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 text-white p-2 rounded-xl h-auto font-normal"
            >
              <Music size={16} />
              <span>Genre</span>
              <ChevronDown size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-96 bg-[#2A2B2F] border-gray-600 text-white p-4 mt-4 translate-x-10"
            align="center"
          >
            <div className="grid grid-cols-2 gap-2">
              {genres.map((genre) => (
                <DropdownMenuItem
                  key={genre}
                  className="flex items-center space-x-2 hover:bg-gray-700 cursor-pointer p-2"
                  onSelect={(e) => e.preventDefault()} // Prevent dropdown closure on item selection
                >
                  <Checkbox
                    id={genre}
                    className="border-gray-500 h-5 w-5 data-[state=checked]:bg-green-300 data-[state=checked]:border-green-600"
                    checked={selectedGenres.includes(genre)}
                    onClick={(e) => handleCheckboxClick(genre, e)}
                  />
                  <label
                    htmlFor={genre}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    onClick={(e) => handleCheckboxClick(genre, e)}
                  >
                    {genre}
                  </label>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-600 flex justify-between">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
              <Button
                size="sm"
                variant={"outline"}
                className="rounded-full border-[#1ED760] hover:bg-transparent text-[#1ED760] hover:text-[#1ED760] cursor-pointer bg-transparent"
                onClick={handleApplyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Time Dropdown */}
      <div className="grow">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 text-white p-2 rounded-xl h-auto font-normal"
            >
              <Clock size={16} />
              <span>Time</span>
              <ChevronDown size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-48 bg-[#2A2B2F] border-gray-600 mt-4 text-white"
            align="center"
          >
            {timeOptions.map((timeOption) => (
              <DropdownMenuItem key={timeOption} className="cursor-pointer">
                {timeOption}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Saved Filter */}
      <div className="grow">
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-white p-2 rounded-xl h-auto font-normal"
        >
          <Heart size={18} />
          <span>Saved</span>
        </Button>
      </div>
    </div>
  );
}
