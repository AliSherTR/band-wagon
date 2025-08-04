import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Band Wagon | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex bg-black h-full relative">
        <div className="absolute top-1/2 z-[2000] left-[10px] -translate-y-1/2 pointer-events-none">
          <div className="pointer-events-auto">
            <Sidebar />
          </div>
        </div>

        {/* Main content area - full width for map interaction */}
        <div className="grow">{children}</div>
      </div>
    </div>
  );
}
