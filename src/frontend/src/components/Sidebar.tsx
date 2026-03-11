import { Clock, Flame, LayoutDashboard, Trophy, Users, X } from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../App";

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems: {
  id: Page;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  { id: "squad", label: "Squad", icon: Users },
  { id: "match_history", label: "Match History", icon: Clock },
];

const ocidMap: Record<Page, string> = {
  dashboard: "nav.dashboard.link",
  leaderboard: "nav.leaderboard.link",
  squad: "nav.squad.link",
  match_history: "nav.match_history.link",
};

export default function Sidebar({
  activePage,
  setActivePage,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <aside
      className={[
        "fixed lg:relative z-30 h-full w-64 flex flex-col transition-transform duration-300",
        "bg-sidebar border-r border-sidebar-border",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Flame
              size={28}
              className="text-primary animate-pulse-glow"
              fill="oklch(0.72 0.18 45 / 0.4)"
            />
          </div>
          <span className="font-display font-black text-xl tracking-widest text-foreground uppercase">
            FF <span className="text-primary">PANEL</span>
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <motion.button
              key={item.id}
              type="button"
              data-ocid={ocidMap[item.id]}
              onClick={() => setActivePage(item.id)}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
              className={[
                "w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all duration-200",
                "uppercase tracking-wider text-sm font-bold",
                isActive
                  ? "bg-primary/10 text-primary border border-primary/30 shadow-fire-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent",
              ].join(" ")}
            >
              <Icon size={18} className={isActive ? "text-primary" : ""} />
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* User info */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">P</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground truncate">
              PHANTOM_X99
            </p>
            <p className="text-xs text-muted-foreground">LVL 72 · HEROIC</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-green-500 shrink-0" />
        </div>
      </div>
    </aside>
  );
}
