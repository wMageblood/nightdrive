import { PLAYER_INFORMATION } from "../constants/playerInformation"
import * as CLASSES from "../assets/classIcons/index"


export const CLASS_DATA = [
  {
    wowClassName: 'DH',
    classIcon: CLASSES.demonHunterIcon,
    textStyling: 'font-semibold text-dh',
    backgroundStyling: 'bg-dh/50 border border-dh rounded-md mb-6 drop-shadow-lg drop-shadow-dh/50 hover:bg-dh hover:border-dh/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'DH')).length,
  },
  {
    wowClassName: 'Druid',
    classIcon: CLASSES.druidIcon,
    textStyling: 'font-semibold text-druid',
    backgroundStyling: 'bg-druid/50 border border-druid rounded-md mb-6 drop-shadow-lg drop-shadow-druid/50 hover:bg-druid hover:border-druid/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Druid')).length,
  },
  {
    wowClassName: 'DK',
    classIcon: CLASSES.deathKnightIcon,
    textStyling: 'font-semibold text-dk',
    backgroundStyling: 'bg-dk/50 border border-dk rounded-md mb-6 drop-shadow-lg drop-shadow-dk/50 hover:bg-dk hover:border-dk/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'DK')).length,
  },
  {
    wowClassName: 'Evoker',
    classIcon: CLASSES.evokerIcon,
    textStyling: 'font-semibold text-evoker',
    backgroundStyling: 'bg-evoker/50 border border-evoker rounded-md mb-6  drop-shadow-lg drop-shadow-evoker/50 hover:bg-evoker hover:border-evoker/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Evoker')).length,
  },
  {
    wowClassName: 'Hunter',
    classIcon: CLASSES.hunterIcon,
    textStyling: 'font-semibold text-hunter',
    backgroundStyling: 'bg-hunter/50 border border-hunter rounded-md mb-6  drop-shadow-lg drop-shadow-hunter/50 hover:bg-hunter hover:border-hunter/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Hunter')).length,
  },
  {
    wowClassName: 'Mage',
    classIcon: CLASSES.mageIcon,
    textStyling: 'font-semibold text-mage',
    backgroundStyling: 'bg-mage/50 border border-mage rounded-md mb-6  drop-shadow-lg drop-shadow-mage/50 hover:bg-mage hover:border-mage/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Mage')).length,
  },
  {
    wowClassName: 'Monk',
    classIcon: CLASSES.monkIcon,
    textStyling: 'font-semibold text-monk',
    backgroundStyling: 'bg-monk/50 border border-monk rounded-md mb-6  drop-shadow-lg drop-shadow-monk/50 hover:bg-monk hover:border-monk/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Monk')).length,
  },
  {
    wowClassName: 'Paladin',
    classIcon: CLASSES.paladinIcon,
    textStyling: 'font-semibold text-paladin',
    backgroundStyling: 'bg-paladin/50 border border-paladin rounded-md mb-6  drop-shadow-lg drop-shadow-paladin/50 hover:bg-paladin hover:border-paladin/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Paladin')).length,
  },
  {
    wowClassName: 'Priest',
    classIcon: CLASSES.priestIcon,
    textStyling: 'font-semibold text-priest',
    backgroundStyling: 'bg-priest/50 border border-priest rounded-md mb-6  drop-shadow-lg drop-shadow-priest/50 text-shadow-md hover:bg-priest hover:border-priest/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Priest')).length,
  },
  {
    wowClassName: 'Rogue',
    classIcon: CLASSES.rogueIcon,
    textStyling: 'font-semibold text-rogue',
    backgroundStyling: 'bg-rogue/50 border border-rogue rounded-md mb-6  drop-shadow-lg drop-shadow-rogue/50 hover:bg-rogue hover:border-rogue/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Rogue')).length,
  },
  {
    wowClassName: 'Shaman',
    classIcon: CLASSES.shamanIcon,
    textStyling: 'font-semibold text-shaman',
    backgroundStyling: 'bg-shaman/50 border border-shaman rounded-md mb-6  drop-shadow-lg drop-shadow-shaman/50 hover:bg-shaman hover:border-shaman/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Shaman')).length,
  },
  {
    wowClassName: 'Warlock',
    classIcon: CLASSES.warlockIcon,
    textStyling: 'font-semibold text-warlock',
    backgroundStyling: 'bg-warlock/50 border border-warlock rounded-md mb-6  drop-shadow-lg drop-shadow-warlock/50 hover:bg-warlock hover:border-warlock/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Warlock')).length,
  },
  {
    wowClassName: 'Warrior',
    classIcon: CLASSES.warriorIcon,
    textStyling: 'font-semibold text-warrior',
    backgroundStyling: 'bg-warrior/50 border border-warrior rounded-md mb-6  drop-shadow-lg drop-shadow-warrior/50 hover:bg-warrior hover:border-warrior/50 transition duration-300',
    classCounter: PLAYER_INFORMATION.filter((player => player.mainClass == 'Warrior')).length,
  },
];