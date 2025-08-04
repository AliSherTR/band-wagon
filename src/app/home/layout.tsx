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
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className=" flex bg-black h-full relative">
        <div className="absolute top-1/2 left-[10px] -translate-y-1/2">
          <Sidebar />
        </div>
        <div className=" grow">{children}</div>
      </div>
    </div>
  );
}
