import React from "react";
import { ITrelloCardProps } from "./interfaces";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const TrelloCard: React.FC<ITrelloCardProps> = props => {
  let { text } = { ...props };
  return (
    <>
      <Card>
        <Typography gutterBottom>{text}</Typography>
      </Card>
    </>
  );
};

export default TrelloCard;
