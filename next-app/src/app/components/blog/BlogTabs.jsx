'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogTabs() {
  const pathname = usePathname();

  const tabs = [
    { href: "/blog", label: "Προβολή Όλων" },
    { href: "/blog/news", label: "Νέα" },
    { href: "/blog/studies", label: "Μελέτες" },
  ];

  return (
    <div className="w-full bg-[#1C86D1] shadow-sm">
      <nav className="flex max-w-7xl mx-auto gap-6 px-4 py-2 text-sm md:text-base">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-2 py-1 border-b-2 transition ${
              pathname === tab.href
                ? "border-white text-white font-medium"
                : "border-transparent hover:border-white text-white"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
