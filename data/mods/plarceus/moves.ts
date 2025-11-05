// EXAMPLE
export const Moves: {[k: string]: ModdedMoveData} = {
  // A sample "Style Strike" move that supports both styles
  stylstrike: {
    name: "Style Strike",
    basePower: 80,
    accuracy: 100,
    pp: 15,
    type: "Normal",
    category: "Physical",
    // custom tag so we can handle it in scripts
    plarceusStyle: true,
    onHit(target, source, move) {
      // default effect (if needed)
    },
  },
};
