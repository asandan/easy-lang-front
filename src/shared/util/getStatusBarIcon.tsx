import { CircleCheckBig, CircleX, Clock, Timer } from "lucide-react";
import { StatusBarType } from "./constants";

export const getStatusBarIcon = (status: StatusBarType) => {
  switch (status) {
    case StatusBarType.IN_PROGRESS:
      return Clock;
    case StatusBarType.DONE:
      return CircleCheckBig;
    case StatusBarType.UNTRANSLATED:
      return CircleX;
    case StatusBarType.DELAYED:
      return Timer;
  }
};
