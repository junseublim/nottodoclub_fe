import { ModerationStatusType } from "@/types";

export const moderationStatusToColor = (status: ModerationStatusType) => {
  if (status === 'success') return 'green-positive'
  else if (status === 'fail') return 'red-negative'
  else return ''
}