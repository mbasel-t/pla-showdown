// EXAMPLE
export const Scripts: ModdedBattleScriptsData = {
  // Called whenever a move is being constructed/used
  onModifyMove(move, source, target) {
    // If this move supports the PL:Arceus styles...
    if (move.plarceusStyle && source?.volatiles['plarceusstyle']) {
      const style = source.volatiles['plarceusstyle'].style; // 'strong' or 'agile'
      if (style === 'strong') {
        // Strong Style: +30% power, lower priority
        move.basePower = Math.floor(move.basePower * 1.3);
        // optionally adjust priority (Showdown uses move.priority elsewhere)
      } else if (style === 'agile') {
        // Agile Style: lower power but +priority and/or higher crit
        move.basePower = Math.floor(move.basePower * 0.8);
        move.priority = (move.priority || 0) + 1;
      }
    }
  },

  // Example: command to toggle style at the start of turn or on move selection
  onBeforeMove(attacker, defender, move) {
    // you could set volatiles depending on player input or move chosen
  },

  // Define the volatile if needed
  // (Volatile implementation is often in data/conditions.ts or inline)
};
