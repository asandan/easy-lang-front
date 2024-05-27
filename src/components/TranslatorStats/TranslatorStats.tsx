import { Avatar } from "@mui/material";

export const TranslatorStats = () => {
  return (
    <div className="flex flex-col justify-between w-[300px] h-[255px] bg-white p-5 rounded-xl mt-5">
      <div className="flex flex-row gap-1.5">
        <Avatar variant="square">N</Avatar>
        <span className="self-center">Talgat Galymzhan</span>
      </div>
      <div className="flex flex-col gap-1.5 text-lg">
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Done:</span>
          <span>40</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Not fulfilled:</span>
          <span>0</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Executed:</span>
          <span>20</span>
        </div>
      </div>
      <div className="flex flex-row w-[250px]">
        <div className="flex flex-col">
          <div className="h-[12px] bg-[#CA0F22] w-[78px] rounded-l-xl"></div>
          <span>32%</span>
        </div>
        <div className="flex flex-col self-center">
          <div className="h-[11.8px] bg-[#02B887] w-[108px] self-center"></div>
          <span>46%</span>
        </div>
        <div className="flex flex-col ">
          <div className="h-[12px] bg-[#EF9B0F] w-[68px] rounded-r-xl"></div>
          <span>22%</span>
        </div>
      </div>
    </div>
  );
};
