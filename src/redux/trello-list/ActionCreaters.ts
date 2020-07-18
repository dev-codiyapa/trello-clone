import { IaddList } from "./interfaces";

export const addList: IaddList = (title: string) => {
  console.log("add list action");
  return {
    type: "ADD_LIST",
    payload: title
  };
};
