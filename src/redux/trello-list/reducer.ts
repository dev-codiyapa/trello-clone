import { IList } from "./interfaces";

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
        {
          id: 1,
          text: "complete testing of task-1"
        }
      ]
    },
    {
      title: "Done",
      id: 2,
      card: [
        {
          id: 0,
          text: "First In progress task"
        },
        {
          id: 1,
          text: "complete testing of task-1"
        }
      ]
    }
  ]
};

const listReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
