import { Bell, LogOut, UserRound } from "lucide-react";
import { Logo } from "../Logo";
import { useGetSessionData, useLogout } from "@/shared/hooks";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const logout = useLogout();
  const { name, surname } = useGetSessionData();

  return (
    <div className="flex w-[100vw] bg-white z-50 justify-center items-center h-[90px]">
      <div className="flex justify-between w-2/3">
        <Logo />
        <div className="flex gap-10 self-center">
          <div className="flex gap-3">
            <span className="text-lg">{[name, surname].join(" ")}</span>
            <UserRound className="cursor-pointer" />
            <Bell className="cursor-pointer" />
          </div>
          <LogOut className="cursor-pointer" onClick={() => logout()} />
        </div>
      </div>
    </div>
  );
};
