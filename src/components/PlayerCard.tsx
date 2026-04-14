interface PlayerCardProps {
  rank: string;
  name: string;
  description: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  mainClass: string;
}

const PlayerCard = ({rank, name, description, firstImage, secondImage, thirdImage, mainClass}: PlayerCardProps) => {
  return (
    <div className="">
      <div className="bg-title min-w-65 w-65 min-h-100 h-80 font-Roboto p-5 rounded-[5px] border-2 border-pink-400">
        {/* <div className="space-y-1">
          <p className="font-bold tracking-tighter text-xl mb-5">{rank}</p>
          <p className="font-bold text-3xl mb-5">{name}</p>
          <p className="text-sm mb-6 grow">{description}</p>
        </div> */}
        <div className="flex justify-center gap-2 bg-amber-500 mx-auto">
          <p className="bg-red-500 min-h-15 h-15 min-w-15 w-15">{firstImage}</p>
          <p className="bg-green-500 min-h-15 h-15 min-w-15 w-15">{secondImage}</p>
          <p className="bg-blue-500 min-h-15 h-15 min-w-15 w-15">{thirdImage}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;