import { StatusBarType } from "./constants";

export const getStatusBarColor = (status: StatusBarType) => {
  switch (status) {
    case StatusBarType.IN_PROGRESS:
      return "#EF9B0F";
    case StatusBarType.DONE:
      return "#02B887"
    case StatusBarType.UNTRANSLATED:
      return "#CA0F22";
    case StatusBarType.DELAYED: 
      return "#638BC8"
  }
}