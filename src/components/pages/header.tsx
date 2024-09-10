"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  User,
  Lightbulb,
  Briefcase,
  FolderOpen,
  Mail,
  Home,
  Building2,
} from "lucide-react";

export function Header() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/about",
    },
    {
      title: "Skills",
      icon: <Lightbulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/skills",
    },
    {
      title: "Experience",
      icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/experience",
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/contact",
    },
    {
      title: "Jobs",
      icon: <Building2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/jobs",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <FloatingDock
        items={links}
        desktopClassName="mt-4"
        mobileClassName="fixed bottom-4 right-4"
      />
    </header>
  );
  
}
