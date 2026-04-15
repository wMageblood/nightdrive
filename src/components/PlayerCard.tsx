import { classBorderColor } from "../utils/classBorderColor";

interface PlayerCardProps {
  rank: string;
  name: string;
  description: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  mainClass: string;
}

const PlayerCard = ({ rank, name, description, firstImage, secondImage, thirdImage, mainClass}: PlayerCardProps) => {

  return (
    <div className="">
      <div className={`bg-title min-w-65 w-65 min-h-100 h-80 font-Roboto p-5 rounded-[5px] border-6 shadow-3xl ${classBorderColor[mainClass]} flex flex-col`}>

        <div>
          <p className="font-bold tracking-tighter text-xl mb-5">{rank}</p>
          <p className="font-bold text-3xl mb-5">{name}</p>
          <p className="text-sm mb-6 grow">{description}</p>
        </div>

        <div className="flex justify-center gap-4 items-end mt-auto border-px">
          <img src={firstImage} className="min-h-15 h-15 min-w-15 w-15" />
          <img src={secondImage} className="min-h-15 h-15 min-w-15 w-15" />
          <img src={thirdImage} className="min-h-15 h-15 min-w-15 w-15" />
        </div>

      </div>
    </div>
  );
};

export default PlayerCard;
