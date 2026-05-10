import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  FlaskConical,
  MessageSquare,
  Users,
  Settings,
  Bell,
} from "lucide-react";

const pages = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    shortcut: "D",
  },

  {
    name: "Research",
    path: "/research",
    icon: FlaskConical,
    shortcut: "R",
  },

  {
    name: "AI Chat",
    path: "/chat",
    icon: MessageSquare,
    shortcut: "C",
  },

  {
    name: "Team",
    path: "/team",
    icon: Users,
    shortcut: "T",
  },

  {
    name: "Notifications",
    path: "/notifications",
    icon: Bell,
    shortcut: "N",
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
    shortcut: "S",
  },
];

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      // Prevent while typing
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      // Open palette
      if (e.key === "/") {
        e.preventDefault();
        setOpen(true);
      }

      // Close
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-40"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-[550px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl">

              {/* Search Input */}
              <div className="border-b border-white/10 px-4 py-4">
                <Command.Input
                  autoFocus
                  placeholder="Search pages, tools, settings..."
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Empty */}
              <Command.Empty className="py-10 text-center text-sm text-gray-500">
                No results found.
              </Command.Empty>

              {/* List */}
              <Command.List className="max-h-[400px] overflow-y-auto p-3">

                <Command.Group heading="Navigation">

                  {pages.map((page) => {
                    const Icon = page.icon;

                    return (
                      <Command.Item
                        key={page.path}
                        value={page.name}
                        onSelect={() => {
                          navigate(page.path);
                          setOpen(false);
                        }}
                        className="group mt-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 text-white transition hover:bg-[#1e293b]"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            size={18}
                            className="text-violet-400"
                          />

                          <span className="text-sm">
                            {page.name}
                          </span>
                        </div>

                        <kbd className="rounded-md bg-black/30 px-2 py-1 text-xs text-gray-400">
                          {page.shortcut}
                        </kbd>
                      </Command.Item>
                    );
                  })}

                </Command.Group>
              </Command.List>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-xs text-gray-500">
                <span>
                  Type to search instantly
                </span>

                <div className="flex items-center gap-2">
                  <kbd className="rounded bg-black/30 px-2 py-1">
                    /
                  </kbd>

                  <span>to open</span>
                </div>
              </div>

            </Command>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CommandMenu;