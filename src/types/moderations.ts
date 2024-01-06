export type ModerationStatusType = 'success' | 'fail'

export type ModerationItemType = {
  id: number;
  title: string;
  date: Date;
  status: ModerationStatusType;
}
