export type messageData = {
  readArrLength: number;
  readList: [{ time: string; content: string }];
  readedArrLength: number;
  readedList: [{ time: string; content: string }];
};

export type goodType = {
  name: string;
  price: number;
  num: number;
};

export type goodsType = {
  imgUrl: string;
  itemList: goodType[];
  id?: number;
  name?: string;
  num?: number;
};
