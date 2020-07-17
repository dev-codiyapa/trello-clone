import React from "react";
import { ICardActionBtnProps, ICardActionBtnState } from "./interfaces";
import Icon from "@material-ui/core/Icon";
import "./CardActionBtn.component.css";

class CardActionBtn extends React.Component<
  ICardActionBtnProps,
  ICardActionBtnState
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  addCard = () => {
    console.log("add card");
  };

  cardButton = () => {
    const { list } = this.props;
    const btnText = list ? "Add another list" : "Add another card";
    return (
      <>
        <div
          className={list ? "add-list-btn" : "add-card-btn"}
          onClick={this.addCard}
        >
          <Icon>add</Icon>
          <span>{btnText}</span>
        </div>
      </>
    );
  };
  render() {
    return this.cardButton();
  }
}

export default CardActionBtn;
