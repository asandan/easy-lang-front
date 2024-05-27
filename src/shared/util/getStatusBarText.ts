import { StatusBarType } from "./constants";

export const getStatusBarText = (status: StatusBarType) => {
  switch (status) {
    case StatusBarType.IN_PROGRESS:
      return "In progress";
    case StatusBarType.DONE:
      return "Translated"
    case StatusBarType.UNTRANSLATED:
      return "Not translated";
    case StatusBarType.DELAYED: 
      return "Delayed"
  }
}