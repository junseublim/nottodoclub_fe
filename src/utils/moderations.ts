import { Moderation } from "@/types";
import { isSameDate } from ".";

type WeekDayStatus = "good" | "not bad" | "bad" | "";

type StatusToBgColorMap = {
  [k in WeekDayStatus]: string;
};

const statusBgColorMap: StatusToBgColorMap = {
  good: "bg-green-positive",
  "not bad": "bg-yellow-warning",
  bad: "bg-red-negative",
  "": "",
};

export const getDotColorOfDate = (moderations: Moderation[], date: Date) => {
  const moderationsOfDate = moderations.filter((moderation) => {
    const dateOfModeration = new Date(moderation.date);
    return isSameDate(dateOfModeration, date);
  });

  const totalModerations = moderationsOfDate.length;

  if (totalModerations === 0) {
    return "";
  }

  const successRate =
    moderationsOfDate.filter((moderation) => moderation.success).length /
    totalModerations;

  let succesStatus: WeekDayStatus;

  if (successRate > 0.8) succesStatus = "good";
  else if (successRate > 0.55) succesStatus = "not bad";
  else succesStatus = "bad";

  return statusBgColorMap[succesStatus];
};
