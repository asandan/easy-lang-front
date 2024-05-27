import { BookMarked, Download, PinOff } from "lucide-react";
import { BorderLinearProgress } from "../MUI";
import { StatusBarType } from "@/shared/util";
import { StatusBar } from "../StatusBar";
import { FC } from "react";

export type OrderCardProps = {
  status: StatusBarType;
};

export const OrderCard: FC<OrderCardProps> = ({ status }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col w-[800px] h-[330px] bg-white rounded-xl">
        <div className="p-7">
          <div className="flex justify-between">
            <div className="flex flex-row gap-1.5">
              <BookMarked width={30} height={30} />
              <span className="text-2xl self-center">Harry Potter</span>
            </div>
            <div className="flex flex-row gap-5">
              <PinOff width={30} height={30} className="cursor-pointer" />
              <Download width={30} height={30} className="cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between mt-7">
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-1">
                <span className="text-[#bbb]">Assignments are made:</span>
                <span>15 days out of 30</span>
              </li>
              <li className="flex flex-row gap-1">
                <span className="text-[#bbb]">Order ID:</span>
                <span>#3252</span>
              </li>
              <li className="flex flex-row gap-1">
                <span className="text-[#bbb]">Started at:</span>
                <span>12 May, 2023</span>
              </li>
              <li className="flex flex-row gap-1">
                <span className="text-[#bbb]">Translated:</span>
                <span>200</span>
              </li>
              <li className="flex flex-row gap-1">
                <span className="text-[#bbb]">Total pages:</span>
                <span>344</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <span className="self-end text-lg">Completed on</span>
              <span className="font-bold text-4xl self-end">66%/100%</span>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                color="secondary"
                className="w-[220px] h-[11px] mt-2"
              />
            </div>
          </div>
        </div>
        <StatusBar status={status} />
      </div>
    </div>
  );
};
