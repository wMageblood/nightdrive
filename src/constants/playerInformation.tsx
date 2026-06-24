import { Shield, CirclePlus, Crown, Sword, CodeXml, PlusCircle, Circle} from 'lucide-react'
import * as PLAYERS from "../assets/guildArmories/index.ts"

export const PLAYER_INFORMATION = [
  {
    name: 'Over',
    characterName: 'Omnisee',
    characterRealm: 'Ragnaros',
    mainClass: 'Hunter',
    mainRole: 'DPS',
    image: PLAYERS.over,
    tags: [
      {
        label: "Officer",
        icon: <Crown className='w-5 h-5' />
      },
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Kayn',
    characterName: 'Chriskaynttv',
    characterRealm: 'Tichondrius',
    mainClass: 'DK',
    mainRole: 'Tank',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Officer",
        icon: <Crown className='w-5 h-5' />
      },
      {
        label: "Tank",
        icon: <Shield className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Manatsu',
    characterName: 'Mntsu',
    characterRealm: 'Ragnaros',
    mainClass: 'Monk',
    mainRole: 'Tank',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Tank",
        icon: <Shield className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'DirtyLee',
    characterName: 'Dirtylee',
    characterRealm: 'Ragnaros',
    mainClass: 'Monk',
    mainRole: 'Healer',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Healer",
        icon: <CirclePlus className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Fenrus',
    characterName: 'Fënrus',
    characterRealm: 'Ragnaros',
    mainClass: 'Paladin',
    mainRole: 'Healer',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Healer",
        icon: <CirclePlus className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Assicu',
    characterName: 'Assicu',
    characterRealm: 'Ragnaros',
    mainClass: 'Priest',
    mainRole: 'Healer',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Healer",
        icon: <CirclePlus className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Ale',
    characterName: 'Eäk',
    characterRealm: `Zul'jin`,
    mainClass: 'Priest',
    mainRole: 'Healer',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Healer",
        icon: <CirclePlus className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Galileah',
    characterName: 'Galileah',
    characterRealm: 'Sargeras',
    mainClass: 'Paladin',
    mainRole: 'Healer',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "Healer",
        icon: <CirclePlus className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Sakimo',
    characterName: 'Zmbryt',
    characterRealm: 'Ragnaros',
    mainClass: 'DK',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Wizza',
    characterName: 'Wizza',
    characterRealm: 'Ragnaros',
    mainClass: 'Warrior',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Nekon',
    characterName: 'Nekon',
    characterRealm: 'Ragnaros',
    mainClass: 'Rogue',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Âirak',
    characterName: 'Âirak',
    characterRealm: 'Ragnaros',
    mainClass: 'Mage',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Hedzzen',
    characterName: 'Hedzzen',
    characterRealm: 'Ragnaros',
    mainClass: 'Mage',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Arûh',
    characterName: 'Arûh',
    characterRealm: 'Ragnaros',
    mainClass: 'Hunter',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Dämba',
    characterName: 'Dämba',
    characterRealm: 'Ragnaros',
    mainClass: 'Warlock',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Gløøms',
    characterName: 'Gløøms',
    characterRealm: 'Ragnaros',
    mainClass: 'Warlock',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Dani',
    characterName: 'Danigos',
    characterRealm: 'Elune',
    mainClass: 'Evoker',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Kina',
    characterName: 'Japan',
    characterRealm: 'Ragnaros',
    mainClass: 'Evoker',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Kreic',
    characterName: 'Kreic',
    characterRealm: 'Ragnaros',
    mainClass: 'DH',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Noroguepls',
    characterName: 'Noroguepls',
    characterRealm: 'Ragnaros',
    mainClass: 'DH',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
  {
    name: 'Pansito',
    characterName: 'Pansïto',
    characterRealm: 'Ragnaros',
    mainClass: 'DH',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    tags: [
      {
        label: "DPS",
        icon: <Sword className='w-5 h-5' />
      },
    ]
  },
];