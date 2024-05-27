import { Tab, Tabs as MUITabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export const TABS_LIST = [
  "ALL",
  "DONE",
  "IN PROGRESS",
  "UNTRANSLATED",
] as const;

export const Tabs = () => {
  const [tab, setTab] = useState<number>(0);

  const handleChangeTab = (_: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <MUITabs
      value={tab}
      variant="fullWidth"
      onChange={handleChangeTab}
      className="flex font-semibold justify-between"
      TabIndicatorProps={{ style: { backgroundColor: "black" } }}
      sx={{ borderBottom: 1, borderColor: "divider" }}
      TabScrollButtonProps={{ style: { display: "flex", justifyContent: "space-between" } }}
    >
      {TABS_LIST.map((tabName) => (
        <Tab key={tabName} className="font-semibold border-b" label={tabName} />
      ))}
    </MUITabs>
  );
};
