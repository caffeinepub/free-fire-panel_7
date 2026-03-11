import {
  Crosshair,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    label: "Total Kills",
    value: "8,421",
    icon: Target,
    color: "text-destructive",
  },
  {
    label: "Win Rate",
    value: "34.7%",
    icon: TrendingUp,
    color: "text-green-400",
  },
  { label: "Matches", value: "1,204", icon: Shield, color: "text-primary" },
  {
    label: "Headshot Rate",
    value: "52.3%",
    icon: Crosshair,
    color: "text-yellow-400",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Page header */}
      <div className="tactical-header camo-stripe rounded-md px-6 py-4">
        <h1 className="font-display font-black text-2xl uppercase tracking-widest text-foreground">
          <span className="text-primary">Player</span> Dashboard
        </h1>
        <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">
          Season 31 · Ranked Mode
        </p>
      </div>

      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glow-orange-border border rounded-lg overflow-hidden"
      >
        <div className="relative bg-gradient-to-br from-card to-background p-6">
          {/* Background decoration */}
          <div className="absolute inset-0 camo-stripe opacity-50" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-full border-2 border-primary/60 overflow-hidden glow-orange bg-muted">
                <img
                  src="/assets/generated/ff-avatar-transparent.dim_200x200.png"
                  alt="PHANTOM_X99 avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-black px-2 py-0.5 rounded-full">
                72
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h2 className="font-display font-black text-3xl uppercase tracking-wider text-foreground">
                  PHANTOM_X99
                </h2>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary/20 border border-primary/40 text-primary text-sm font-black uppercase tracking-widest self-center">
                  <Star size={12} fill="currentColor" />
                  HEROIC
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield size={14} className="text-primary" />
                  UID: 4829103847
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  Brazil 🇧🇷
                </span>
              </div>

              {/* Level progress bar */}
              <div className="mt-4 max-w-xs mx-auto sm:mx-0">
                <div className="flex justify-between text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                  <span>Level Progress</span>
                  <span>72 / 80</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-fire-300 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div>
        <h2 className="font-display font-black text-lg uppercase tracking-widest text-muted-foreground mb-4">
          Combat Statistics
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                className="stat-card rounded-lg p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    {stat.label}
                  </span>
                  <Icon size={16} className={stat.color} />
                </div>
                <p className={`font-display font-black text-3xl ${stat.color}`}>
                  {stat.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
