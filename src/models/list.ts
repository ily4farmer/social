export enum EListStatus {
  Active = 'active',
  Fired = 'fired',
  Hold = 'hold',
}

export type TListModel = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type TListGetItemsResponse = TListModel[];

export type TListGetItemsRequest = {
  _limit: number;
  _page: number;
};
