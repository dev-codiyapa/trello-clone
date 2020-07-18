export interface IList {
  data: object;
}

export type TRELLO_LIST_ACTIONS = {
  type: "ADD_LIST";
  payload: string;
};

export interface IaddList {
  (title: string): TRELLO_LIST_ACTIONS;
}
