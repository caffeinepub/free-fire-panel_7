import { Crown, Shield, User, Users } from "lucide-react";
import { motion } from "motion/react";

const squadMembers = [
  { name: "PHANTOM_X99", level: 72, role: "Leader" as const, initials: "PX" },
  { name: "BLAZE_007", level: 65, role: "Member" as const, initials: "BZ" },
  { name: "VIPER_X", level: 58, role: "Member" as const, initials: "VX" },
  { name: "SHADOW_K", level: 71, role: "Member" as const, initials: "SK" },
];

export default function Squad() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="tactical-header camo-stripe rounded-md px-6 py-4">
        <div className="flex items-center gap-3">
          <Users className="text-primary" size={22} />
          <h1 className="font-display font-black text-2xl uppercase tracking-widest text-foreground">
            <span className="text-primary">My</span> Squad
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">
          Manage your fire squad
        </p>
      </div>

      {/* Squad card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glow-orange-border border rounded-lg p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-black text-2xl uppercase tracking-wider text-foreground">
              GHOST SQUAD
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-black px-2 py-0.5 rounded uppercase tracking-widest">
                [GHST]
              </span>
              <span className="text-muted-foreground text-sm">
                4 / 4 Members
              </span>
            </div>
          </div>
          <Shield className="text-primary" size={40} />
        </div>

        {/* Members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {squadMembers.map((member, i) => (
            <motion.div
              key={member.name}
              data-ocid={`squad.item.${i + 1}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="stat-card rounded-lg p-4 flex items-center gap-4"
            >
              {/* Avatar */}
              <div
                className={[
                  "w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-lg border-2",
                  member.role === "Leader"
                    ? "bg-primary/20 border-primary text-primary"
                    : "bg-muted border-border text-foreground",
                ].join(" ")}
              >
                {member.initials}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black uppercase tracking-wide text-foreground truncate">
                    {member.name}
                  </span>
                  {member.role === "Leader" && (
                    <Crown
                      size={14}
                      className="text-primary shrink-0"
                      fill="oklch(0.72 0.18 45 / 0.5)"
                    />
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                    LVL {member.level}
                  </span>
                  <span
                    className={[
                      "text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded",
                      member.role === "Leader"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground",
                    ].join(" ")}
                  >
                    {member.role === "Leader" ? (
                      <Crown size={10} className="inline mr-1" />
                    ) : (
                      <User size={10} className="inline mr-1" />
                    )}
                    {member.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Squad stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Avg Level", value: "66.5" },
          { label: "Combined Kills", value: "27,771" },
          { label: "Squad Wins", value: "148" },
        ].map((s) => (
          <div key={s.label} className="stat-card rounded-lg p-4 text-center">
            <p className="font-display font-black text-2xl text-primary">
              {s.value}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 font-bold">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
