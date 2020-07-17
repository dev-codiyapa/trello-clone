import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import "./CardForm.component.css";
import { CardContent } from "@material-ui/core";

class CardForm extends React.Component<any, any> {
  closeForm = () => {
    console.log("close form");
  };
  renderCardForm = () => {
    let { list } = this.props;
    const cardTitle = list
      ? "Enter list title..."
      : "Enter a title of this card...";
    return (
      <>
        <div className="card-form">
          <Card>
            <CardContent>
              <TextareaAutosize
                placeholder={cardTitle}
                className="card-box"
                onBlur={this.closeForm}
              />
            </CardContent>
          </Card>
        </div>
      </>
    );
  };
  render() {
    return this.renderCardForm();
  }
}

export default CardForm;
