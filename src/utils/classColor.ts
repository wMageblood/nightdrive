type ClassColor = {
  bg: string;
  border: string;
  shadow: string;
};


export const classColor: Record<string, ClassColor> = {
  warrior: {
    bg: "bg-warrior",
    border: "border-warrior",
    shadow: "drop-shadow-sm drop-shadow-warrior"
  },
  mage: {
    bg: "bg-mage",
    border: "border-mage",
    shadow: "drop-shadow-sm drop-shadow-mage"
  },
  rogue: {
    bg: "bg-rogue",
    border: "border-rogue",
    shadow: "drop-shadow-sm drop-shadow-rogue"
  },
  priest: {
    bg: "bg-priest",
    border: "border-priest",
    shadow: "drop-shadow-sm drop-shadow-priest"
  },
  druid: {
    bg: "bg-druid",
    border: "border-druid",
    shadow: "drop-shadow-sm drop-shadow-druid"
  },
  hunter: {
    bg: "bg-hunter",
    border: "border-hunter",
    shadow: "drop-shadow-sm drop-shadow-hunter"
  },
  shaman: {
    bg: "bg-shaman",
    border: "border-shaman",
    shadow: "drop-shadow-sm drop-shadow-shaman"
  },
  paladin: {
    bg: "bg-paladin",
    border: "border-paladin",
    shadow: "drop-shadow-sm drop-shadow-paladin"
  },
  warlock: {
    bg: "bg-warlock",
    border: "border-warlock",
    shadow: "drop-shadow-sm drop-shadow-warlock"
  },
  dh: {
    bg: "bg-dh",
    border: "border-dh",
    shadow: "drop-shadow-sm drop-shadow-dh"
  },
  dk: {
    bg: "bg-dk",
    border: "border-dk",
    shadow: "drop-shadow-sm drop-shadow-dk"
  },
  evoker: {
    bg: "bg-evoker",
    border: "border-evoker",
    shadow: "drop-shadow-sm drop-shadow-evoker"
  },
  monk: {
    bg: "bg-monk",
    border: "border-monk",
    shadow: "drop-shadow-sm drop-shadow-monk"
  }
};