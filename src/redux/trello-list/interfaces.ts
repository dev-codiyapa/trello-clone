export interface IList {
  data: object;
}

export type TRELLO_LIST_ACTIONS =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_CARD";
      payload: {
        listId: number;
        content: string;
      };
    };

export interface IaddList {
  (title: string): TRELLO_LIST_ACTIONS;
}

export interface IaddCard {
  (listId: number, content: string): TRELLO_LIST_ACTIONS;
}
