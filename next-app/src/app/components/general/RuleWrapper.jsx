"use client";

import { usePathname } from "next/navigation";

export default function RuleWrapper() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return <div className="svc-rule" />;
}
