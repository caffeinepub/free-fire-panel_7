import { Clock, Crosshair, TrendingUp, Zap } from "lucide-react";
import { motion } from "motion/react";

interface Match {
  id: string;
  mode: string;
  map: string;
  date: string;
  kills: number;
  damage: number;
  placement: number;
  totalPlayers: number;
  won: boolean;
}

const matches: Match[] = [
  {
    id: "m1",
    mode: "Battle Royale",
    map: "Bermuda",
    date: "Mar 10, 2026",
    kills: 8,
    damage: 2140,
    placement: 1,
    totalPlayers: 50,
    won: true,
  },
  {
    id: "m2",
    mode: "Clash Squad",
    map: "Purgatory",
    date: "Mar 10, 2026",
    kills: 12,
    damage: 3420,
    placement: 1,
    totalPlayers: 8,
    won: true,
  },
  {
    id: "m3",
    mode: "Battle Royale",
    map: "Kalahari",
    date: "Mar 9, 2026",
    kills: 3,
    damage: 940,
    placement: 7,
    totalPlayers: 50,
    won: false,
  },
  {
    id: "m4",
    mode: "Battle Royale",
    map: "Bermuda",
    date: "Mar 9, 2026",
    kills: 5,
    damage: 1380,
    placement: 3,
    totalPlayers: 50,
    won: false,
  },
  {
    id: "m5",
    mode: "Clash Squad",
    map: "Bermuda",
    date: "Mar 8, 2026",
    kills: 14,
    damage: 3980,
    placement: 1,
    totalPlayers: 8,
    won: true,
  },
  {
    id: "m6",
    mode: "Battle Royale",
    map: "Purgatory",
    date: "Mar 7, 2026",
    kills: 6,
    damage: 1720,
    placement: 2,
    totalPlayers: 50,
    won: false,
  },
  {
    id: "m7",
    mode: "Battle Royale",
    map: "Kalahari",
    date: "Mar 7, 2026",
    kills: 10,
    damage: 2680,
    placement: 1,
    totalPlayers: 50,
    won: true,
  },
  {
    id: "m8",
    mode: "Clash Squad",
    map: "Kalahari",
    date: "Mar 6, 2026",
    kills: 9,
    damage: 2540,
    placement: 1,
    totalPlayers: 8,
    won: false,
  },
];

const mapColors: Record<string, string> = {
  Bermuda: "text-cyan-400",
  Kalahari: "text-orange-400",
  Purgatory: "text-purple-400",
};

export default function MatchHistory() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="tactical-header camo-stripe rounded-md px-6 py-4">
        <div className="flex items-center gap-3">
          <Clock className="text-primary" size={22} />
          <h1 className="font-display font-black text-2xl uppercase tracking-widest text-foreground">
            <span className="text-primary">Match</span> History
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">
          Last 8 matches
        </p>
      </div>

      {/* Match list */}
      <div className="space-y-3">
        {matches.map((match, i) => (
          <motion.div
            key={match.id}
            data-ocid={`match.item.${i + 1}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
            className={[
              "stat-card rounded-lg p-4 border-l-4",
              match.won ? "border-l-green-500" : "border-l-destructive",
            ].join(" ")}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Mode/Map info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display font-black uppercase tracking-wide text-foreground text-sm">
                    {match.mode}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${mapColors[match.map]}`}
                  >
                    · {match.map}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">
                  {match.date}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <Crosshair size={14} className="text-destructive" />
                  <span className="font-black text-foreground">
                    {match.kills}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase">
                    kills
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={14} className="text-yellow-400" />
                  <span className="font-black text-foreground">
                    {match.damage.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase">
                    dmg
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-primary" />
                  <span className="font-black text-foreground">
                    #{match.placement}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    /{match.totalPlayers}
                  </span>
                </div>
              </div>

              {/* Win/Loss badge */}
              <div
                className={[
                  "shrink-0 px-3 py-1.5 rounded font-black text-xs uppercase tracking-widest border",
                  match.won
                    ? "bg-green-500/15 border-green-500/40 text-green-400"
                    : "bg-destructive/15 border-destructive/40 text-destructive",
                ].join(" ")}
              >
                {match.won ? "VICTORY" : "DEFEAT"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
