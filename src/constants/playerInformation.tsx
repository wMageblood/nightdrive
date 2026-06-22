import { Shield, CirclePlus, Crown, Sword, CodeXml, PlusCircle} from 'lucide-react'
import * as PLAYERS from "../assets/guildArmories/index.ts"

export const PLAYER_INFORMATION = [
  {
    name: 'Overseer',
    rank: 'Officer',
    description: 'Tiene la cara doblada y la mayor parte del tiempo esta resfriado, peeeroooo, coso.',
    mainClass: 'Hunter',
    mainRole: 'DPS',
    image: PLAYERS.over,
    inactive: false,
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
    rank: 'Officer',
    description: '',
    mainClass: 'Paladin',
    mainRole: 'Tank',
    image: PLAYERS.placeholder,
    inactive: false,
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
    name: 'Grun',
    rank: 'Officer',
    description: '',
    mainClass: 'Paladin',
    mainRole: 'DPS',
    image: PLAYERS.placeholder,
    inactive: false,
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
];