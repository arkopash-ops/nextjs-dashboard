"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-2 rounded-md p-2 text-sm font-medium
              ${isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
            `}
          >
            <LinkIcon className="w-5" />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
