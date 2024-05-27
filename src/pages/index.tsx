import { OrderCard } from "@/components/OrderCard/OrderCard";
import { Tabs } from "@/components/Tabs";
import { TranslatorStats } from "@/components/TranslatorStats";
import { StatusBarType } from "@/shared/util";
import { Pagination } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-row gap-4 mt-10 pb-10">
      <TranslatorStats />
      <div className="flex flex-col gap-4">
        <Tabs />
        <OrderCard status={StatusBarType.DELAYED} />
        <OrderCard status={StatusBarType.DONE} />
        <OrderCard status={StatusBarType.IN_PROGRESS} />
        <OrderCard status={StatusBarType.UNTRANSLATED} />
        <div className="flex items-center justify-center w-full">
          <Pagination
            count={10}
            size="large"

            className="flex justify-between "
          />
        </div>
      </div>
    </div>
  );
}
