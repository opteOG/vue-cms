export type formRule = {
  userName: string;
  trueName: string;
  phoneNumber: string;
  time: string;
  state: boolean;
};

export type department = {
  name: string;
  leader: string;
  time: string;
  number: string;
};

export type character = {
  name: string;
  power: string;
  startTime: string;
  endTime: string;
};

export type menu = {
  id: string,
  name: string;
  path: string;
  time: string;
  children?: menu[];
  hasChildren?: boolean;
};
