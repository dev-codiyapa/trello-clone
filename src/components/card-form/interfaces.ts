export interface ICardFormProps {
  closeCardForm: () => void;
  type: string;
  listId:number
}
export interface ICardFormDispatchProps {
  addList: (title: string) => void;
  addCard: (listId: number, content: string) => void;
}
export interface ICardFormState {
  cardConent: string;
}
