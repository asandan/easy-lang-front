import { Avatar } from "@mui/material";
import { FC } from "react";

export type TranslatorStats = {
  name: string;
  surname: string;
  avatarUrl?: string;
  completed: number;
  overdue: number;
  total: number;
  inProgress: number;
  notStarted: number;
};

export const TranslatorStats: FC<TranslatorStats> = ({
  name,
  surname,
  avatarUrl,
  completed,
  overdue,
  total,
  inProgress,
  notStarted,
}) => {
  return (
    <div className="flex flex-col justify-between w-[300px] h-[300px] bg-white p-5 rounded-xl mt-5">
      <div className="flex flex-row gap-1.5">
        <Avatar variant="square">
          {avatarUrl ? <img src={avatarUrl} alt="avatar" /> : name[0] + surname[0]}
        </Avatar>
        <span className="self-center">{[name, surname].join(" ")}</span>
      </div>
      <div className="flex flex-col gap-1.5 text-lg">
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Total:</span>
          <span>{total}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Completed:</span>
          <span>{completed}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Overdue:</span>
          <span>{overdue}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">In progress:</span>
          <span>{inProgress}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-[#bbb]">Not started:</span>
          <span>{notStarted}</span>
        </div>
      </div>
      <div className="flex flex-row gap-1 w-[100px]">
        <div className="flex flex-col items-center">
          <div
            className="h-[12px] bg-[#02B887] rounded-l-xl"
            style={{ width: `${(completed / total) * 100}%` }}
          ></div>
          <span className="ml-2 text-sm">{((completed / total) * 100).toFixed(0)}%</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="h-[12px] bg-[#CA0F22]"
            style={{ width: `${(overdue / total) * 100}%` }}
          ></div>
          <span className="ml-2 text-sm">{((overdue / total) * 100).toFixed(0)}%</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="h-[12px] bg-[#EF9B0F]"
            style={{ width: `${(inProgress / total) * 100}%` }}
          ></div>
          <span className="ml-2 text-sm">{((inProgress / total) * 100).toFixed(0)}%</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="h-[12px] bg-[#638BC8] rounded-r-xl"
            style={{ width: `${(notStarted / total) * 100}%` }}
          ></div>
          <span className="ml-2 text-sm">{((notStarted / total) * 100).toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};
