import {
  getStatusBarColor,
  getStatusBarIcon,
  getStatusBarText,
  OrderStatus,
  STATUS,
} from "@/shared/util";
import { FC } from "react";

export type StatusBarProps = {
  status: STATUS;
};

export const StatusBar: FC<StatusBarProps> = ({ status }) => {
  const [backgroundColor, Icon, text] = [
    getStatusBarColor(status),
    getStatusBarIcon(status),
    getStatusBarText(status),
  ];

  const canUpload =
    status === STATUS.IN_PROGRESS || status === STATUS.NOT_STARTED || status === STATUS.OVERDUE;

  return (
    <div className="w-full h-[120px] flex">
      <div
        className={`flex items-center px-5 h-full ${
          !canUpload ? "rounded-b-lg" : "rounded-bl-lg"
        } flex-1`}
        style={{ backgroundColor }}
      >
        <div className="flex flex-row gap-2">
          <Icon width={25} height={25} color="#fff" />
          <span className="text-white self-center text-lg">{text}</span>
          <div className="te"></div>
        </div>
      </div>
      {canUpload && (
        <div className="flex w-1/5 bg-[#014FB7] h-full rounded-br-lg text-white text-lg items-center justify-center cursor-pointer">
          UPLOAD
        </div>
      )}
    </div>
  );
};
