export interface ICardFormProps {
  closeCardForm: () => void;
}
export interface ICardFormDispatchProps {
  addList: (title: string) => void;
}
export interface ICardFormState {
  cardConent: string;
}
