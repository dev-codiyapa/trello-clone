import { IaddList, IaddCard } from "./interfaces";

export const addList: IaddList = (title: string) => {
  return {
    type: "ADD_LIST",
    payload: title
  };
};

export const addCard: IaddCard = (listId: number, content: string) => {
  return {
    type: "ADD_CARD",
    payload: { listId, content }
  };
};
