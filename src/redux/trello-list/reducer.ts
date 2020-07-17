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
