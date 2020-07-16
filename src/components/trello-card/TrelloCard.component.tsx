import React from "react";
import { ITrelloCardProps } from "./interfaces";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const TrelloCard: React.FC<ITrelloCardProps> = props => {
  return (
    <>
      <Card>
        <Typography gutterBottom>Word of the day</Typography>
      </Card>
    </>
  );
};

export default TrelloCard;
