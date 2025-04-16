export type commodityHeader = {
  title: string;
  num: number;
  icon: string;
  color: string;
};

export type pieData = {
  height?: string;
  dataList?: [
    {
      value: number;
      name: string;
    },
  ];
};

export type areaData = {
  names: string[];
  numbers: number[];
};

export type barData = {
  names: string[];
  numbers: number[];
};

export type roseData = {
  dataList?: [
    {
      value: number;
      name: string;
    },
  ];
};
