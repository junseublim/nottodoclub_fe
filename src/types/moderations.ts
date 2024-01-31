export type ModerationStatusType = 'success' | 'fail'

export type Moderation = {
  id: string;
  title: string;
  status: ModerationStatusType;
  date: string;
  userId: string;
  nottodoId: string;
}

