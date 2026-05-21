import { classColor } from "../utils/classColor";

interface PlayerCardProps {
  rank: string;
  name: string;
  description: string;
  mainClass: string;
};

const PlayerCard = ({ rank, name, description, mainClass}: PlayerCardProps) => {

  return (
    <div className="">
      <div className={`px-3 py-4 min-h-70 h-full ${classColor[mainClass]}`}>

        <div className="*:font-Roboto">
          <p className="font-bold tracking-tighter text-xl mb-5">{rank}</p>
          <p className="font-bold tracking-tighter text-3xl mb-5 uppercase">{name}</p>
          <p className="font-500 text-sm mb-6 grow">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default PlayerCard;
