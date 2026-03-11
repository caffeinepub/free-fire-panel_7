import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { motion } from "motion/react";

const players = [
  {
    rank: 1,
    name: "REAPER_GOD",
    level: 85,
    kills: 14320,
    winRate: "52.1%",
    matches: 2101,
  },
  {
    rank: 2,
    name: "BLAZE_ALPHA",
    level: 81,
    kills: 12890,
    winRate: "48.3%",
    matches: 1980,
  },
  {
    rank: 3,
    name: "VOID_STRIKE",
    level: 79,
    kills: 11450,
    winRate: "45.7%",
    matches: 1850,
  },
  {
    rank: 4,
    name: "PHANTOM_X99",
    level: 72,
    kills: 8421,
    winRate: "34.7%",
    matches: 1204,
  },
  {
    rank: 5,
    name: "SHADOW_K",
    level: 71,
    kills: 7980,
    winRate: "32.1%",
    matches: 1150,
  },
  {
    rank: 6,
    name: "BLAZE_007",
    level: 65,
    kills: 6520,
    winRate: "29.8%",
    matches: 1020,
  },
  {
    rank: 7,
    name: "STORM_HAWK",
    level: 63,
    kills: 5890,
    winRate: "27.4%",
    matches: 980,
  },
  {
    rank: 8,
    name: "VIPER_X",
    level: 58,
    kills: 4960,
    winRate: "24.5%",
    matches: 850,
  },
  {
    rank: 9,
    name: "IRON_WOLF",
    level: 55,
    kills: 4210,
    winRate: "21.3%",
    matches: 780,
  },
  {
    rank: 10,
    name: "NEON_FURY",
    level: 51,
    kills: 3670,
    winRate: "18.9%",
    matches: 692,
  },
];

const rankStyle = ["rank-gold", "rank-silver", "rank-bronze"];

const rankBg = [
  "bg-yellow-500/10 border-yellow-500/20",
  "bg-zinc-400/10 border-zinc-400/20",
  "bg-orange-800/10 border-orange-800/20",
];

function RankMedal({ rank }: { rank: number }) {
  if (rank === 1)
    return <span className="text-lg rank-gold font-black">🥇</span>;
  if (rank === 2)
    return <span className="text-lg rank-silver font-black">🥈</span>;
  if (rank === 3)
    return <span className="text-lg rank-bronze font-black">🥉</span>;
  return (
    <span className="font-bold text-muted-foreground text-sm">#{rank}</span>
  );
}

export default function Leaderboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="tactical-header camo-stripe rounded-md px-6 py-4">
        <div className="flex items-center gap-3">
          <Trophy className="text-primary" size={22} />
          <h1 className="font-display font-black text-2xl uppercase tracking-widest text-foreground">
            <span className="text-primary">Global</span> Leaderboard
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">
          Season 31 · Top 10 Players
        </p>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-lg border border-border overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="tactical-header hover:bg-transparent border-b border-primary/20">
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs w-16">
                Rank
              </TableHead>
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs">
                Player
              </TableHead>
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs text-center">
                Level
              </TableHead>
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs text-center">
                Kills
              </TableHead>
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs text-center">
                Win Rate
              </TableHead>
              <TableHead className="text-primary font-black uppercase tracking-widest text-xs text-center">
                Matches
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player, i) => {
              const isTop3 = i < 3;
              return (
                <TableRow
                  key={player.rank}
                  data-ocid={`leaderboard.item.${i + 1}`}
                  className={[
                    "border-b border-border/50 transition-colors",
                    isTop3
                      ? `${rankBg[i]} border-l-2 hover:opacity-90`
                      : "hover:bg-muted/30",
                  ].join(" ")}
                >
                  <TableCell className="py-3">
                    <RankMedal rank={player.rank} />
                  </TableCell>
                  <TableCell className="py-3">
                    <span
                      className={`font-display font-black uppercase tracking-wide ${isTop3 ? rankStyle[i] : "text-foreground"}`}
                    >
                      {player.name}
                    </span>
                    {player.name === "PHANTOM_X99" && (
                      <span className="ml-2 text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded uppercase font-bold">
                        You
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="py-3 text-center text-muted-foreground font-bold">
                    {player.level}
                  </TableCell>
                  <TableCell className="py-3 text-center text-destructive font-black">
                    {player.kills.toLocaleString()}
                  </TableCell>
                  <TableCell className="py-3 text-center text-green-400 font-bold">
                    {player.winRate}
                  </TableCell>
                  <TableCell className="py-3 text-center text-muted-foreground font-bold">
                    {player.matches.toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
