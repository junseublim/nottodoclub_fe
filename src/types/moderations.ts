export type ModerationStatusType = 'success' | 'fail'

export type ModerationItemType = {
  title: string;
  date: Date;
  status: ModerationStatusType;
}
