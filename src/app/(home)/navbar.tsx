"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const NavbarItem = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <Button
      //asChild showing error: visit docs required
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent hover:border-primary rounded-full border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );                 
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", font.className)}>
          vendora
        </span>
      </Link>
      <NavbarSidebar items={navbarItems} open={isSidebarOpen}  onOpenChange={setIsSidebarOpen} />
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg">
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg">
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Button variant="ghost" className="size-12 border-transparent bg-white" onClick={()=>setIsSidebarOpen(true)}>
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  );
};
