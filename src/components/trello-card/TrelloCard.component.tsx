import React from "react";
import { ITrelloCardProps } from "./interfaces";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const TrelloCard: React.FC<ITrelloCardProps> = props => {
  let { text,cardId } = { ...props };
  return (
    <>
      <Card style={{ marginTop: "8px" }}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TrelloCard;
