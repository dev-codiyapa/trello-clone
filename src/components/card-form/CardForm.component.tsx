import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import "./CardForm.component.css";
import { CardContent, Button, Icon } from "@material-ui/core";
import { connect } from "react-redux";
import { addList } from "../../redux/trello-list/ActionCreaters";
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
  addList: (title: string) => dispatch(addList(title))
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
    this.props.addList("new List");
    console.log("add card to list");
  };
  closeForm = () => {
    this.props.closeCardForm();
    console.log("close form");
  };

  renderCardForm = () => {
    let list = "";
    const cardTitle = list
      ? "Enter list title..."
      : "Enter a title of this card...";
    const btnText = list ? "Add Card" : "Add list";
    return (
      <>
        <div className="card-form">
          <Card>
            <TextareaAutosize
              placeholder={cardTitle}
              value={this.state.cardConent}
              className="card-box"
              onBlur={this.closeForm}
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
