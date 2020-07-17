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

//   close = ()=> {
//     this.setState({
//         isFormOpen: false
//       });
//   }

  cardButton = () => {
    const { list } = this.props;
    const btnText = list ? "Add another list" : "Add another card";
    return (
      <>
        <div
          className={list ? "add-list-btn" : "add-card-btn"}
          onClick={this.handleAddCard}
        >
          <Icon>add</Icon>
          <span>{btnText}</span>
        </div>
      </>
    );
  };

  render() {
    return this.state.isFormOpen ? <CardForm /> : this.cardButton();
  }
}

export default CardActionBtn;
