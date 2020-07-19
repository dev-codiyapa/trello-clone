import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import "./CardForm.component.css";
import { CardContent, Button, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { addList, addCard } from "../../redux/trello-list/ActionCreaters";
import {
  ICardFormProps,
  ICardFormDispatchProps,
  ICardFormState
} from "./interfaces";

const mapStateToProps = (state: any) => {
  return {
    list: state.lists
  };
};
const mapDispatchToProps = (dispatch: any): ICardFormDispatchProps => ({
  addList: (title: string) => dispatch(addList(title)),
  addCard: (listId: number, content: string) =>
    dispatch(addCard(listId, content))
});
class CardForm extends React.Component<ICardFormProps & any, ICardFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardConent: ""
    };
  }

  hanldInputChange = (event: any) => {
    const textContent = event && event.target.value;
    this.setState({
      cardConent: textContent
    });
  };

  addCardToList = () => {
    const type = this.props.type;
    const listId = this.props.listId
    let title = this.state.cardConent;
    if (type == "list" && title) {
      this.props.addList(title);
    } else if (type == "card" && title) {
      this.props.addCard(listId, title);
    }
  };

  closeForm = () => {
    this.props.closeCardForm();
    console.log("close form 1-2-3");
  };

  renderCardForm = () => {
    let type = this.props.type;
    const cardTitle =
      type == "list" ? "Enter list title..." : "Enter a title of this card...";
    const btnText = type == "list" ? "Add list" : "Add Card";
    return (
      <>
        <div className="card-form">
          <Card>
            <TextareaAutosize
              placeholder={cardTitle}
              value={this.state.cardConent}
              className="card-box"
              onChange={this.hanldInputChange}
              autoFocus
            />
          </Card>
          <div className="card-form__btn_section">
            <Button
              variant="contained" 
              className="card-form__btn"
              onClick={this.addCardToList}
            >
              {btnText}
            </Button>
            <Icon className="close-card-form" onClick={this.closeForm}>
              close
            </Icon>
          </div>
        </div>
      </>
    );
  };
  render() {
    return this.renderCardForm();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
