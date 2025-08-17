"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  return (
    <nav className="bg-white text-black shadow right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2 h-24">
            <Link href="/" className="flex items-center space-x-2 h-full">
              <Image src="/logo/3.png" alt="Logo" width={300} height={300} className="h-20 w-auto" />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden sm:flex sm:space-x-4 items-center font-semibold text-sm">
            <NavItem href="/" label="Αρχική" />
            <NavItem href="/about-us" label="Η εταιρεία" />
            <NavItem href="/office" label="Το προϊόν" />
            <NavItem href="/ems" label="Προπόνηση EMS" />
            <NavItem href="/services" label="Πακέτο Συνεργασίας" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Επικοινωνία" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`inline-flex items-center px-2 py-1 rounded-md transition whitespace-nowrap
        ${isActive ? "text-[#1C86D1] border-b-2 border-[#1C86D1]" : "hover:text-[#1C86D1] hover:border-b-2 hover:border-[#1C86D1]"}
      `}
    >
      {label}
    </Link>
  );
}


