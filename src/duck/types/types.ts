export interface PageMeta {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface UseQueryAll<RecordData> {
  info: PageMeta;
  results: RecordData[];
}
