import { IList } from "./interfaces";
import { stat } from "fs";

const initialState: IList = {
  data: [
    {
      title: "TO DO",
      id: 0,
      card: [
        {
          id: 0,
          text: "careted first statis card"
        },
        {
          id: 1,
          text: "caretd second static card"
        }
      ]
    },
    {
      title: "In progress",
      id: 1,
      card: [
        {
          id: 0,
          text: "First In progress task"
        },
      ]
    },
    {
      title: "Done",
      id: 2,
      card: [
        {
          id: 0,
          text: "First task is done"
        },
      ]
    }
  ]
};

const listReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "ADD_LIST":
      let listId = state.data && state.data.length;
      const newList = {
        title: action.payload,
        id: listId + 1,
        card: []
      };
      const currentList = state.data;
      return { ...state, ...currentList.push(newList) };
    case "ADD_CARD":
      let listTrelloId = action.payload && action.payload.listId;
      let cardContent = action.payload && action.payload.content;
      let data = state.data;
      let requestedList = null;
      for (let i = 0; i < data.length; i++) {
        if (listTrelloId == data[i].id) {
          requestedList = data[i];
          break;
        }
      }
      let cardId = requestedList.card && requestedList.card.length - 1;
      requestedList.card.push({ id: cardId, text: cardContent });
      return { ...state };
    default:
      return state;
  }
};

export default listReducer;
