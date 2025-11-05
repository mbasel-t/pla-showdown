// EXAMPLE 
export const Formats: FormatList = [
  {
    name: "[Gen 9] PLA Test",
    mod: 'plarceus',
    ruleset: ['Standard'],
    onBegin() {
      this.add('-message', "Welcome to Pokémon Legends: Arceus battle test!");
    },
  },
];
