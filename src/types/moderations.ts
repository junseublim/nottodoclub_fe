export type ModerationStatusType = "success" | "fail";

export type Moderation = {
  id: string;
  content: string;
  success: boolean;
  date: string;
  userId: string;
  nottodoId: string;
};
