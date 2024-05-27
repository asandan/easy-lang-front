import { Bell, Languages, LogOut, UserRound } from "lucide-react";
import { Logo } from "../Logo";

export const Navbar = () => {
  return (
    <div className="flex w-[100vw] bg-white z-50 justify-center items-center h-[90px]">
      <div className="flex justify-between w-2/3">
        <Logo />
        <div className="flex gap-10 self-center">
          <div className="flex gap-3">
            <span className="text-lg">Talgat Galymzhan</span>
            <UserRound className="cursor-pointer" />
            <Bell className="cursor-pointer" />
          </div>
          <LogOut className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
