import React from "react";
import { ICardActionBtnProps, ICardActionBtnState } from "./interfaces";
import Icon from "@material-ui/core/Icon";
import "./CardActionBtn.component.css";
import CardForm from "../card-form/CardForm.component";

class CardActionBtn extends React.Component<
  ICardActionBtnProps,
  ICardActionBtnState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFormOpen: false
    };
  }

  handleAddCard = () => {
    this.setState({
      isFormOpen: true
    });
  };

  closeCardForm = () => {
    this.setState({
      isFormOpen: false
    });
  };

  cardButton = () => {
    const { type} = this.props;
    const btnText = type == "list" ? "Add another list" : "Add another card";
    return (
      <>
        <div
          className={type == "list" ? "add-list-btn" : "add-card-btn"}
          onClick={this.handleAddCard}
        >
          <Icon>add</Icon>
          <span>{btnText}</span>
        </div>
      </>
    );
  };

  render() {
    const { type, listId } = this.props;
    return this.state.isFormOpen ? (
      <CardForm closeCardForm={this.closeCardForm} type={type} listId={listId} />
    ) : (
      this.cardButton()
    );
  }
}

export default CardActionBtn;
