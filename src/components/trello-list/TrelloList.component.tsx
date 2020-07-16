import React from "react";
import { ITrelloListProps } from "./interfaces";
import "./TrelloList.component.css";
import TrelloCard from "../trello-card/TrelloCard.component";

const TrelloList: React.FC<ITrelloListProps> = props => {
  let { title } = { ...props };
  return (
    <>
      <div className="container">
        <h4>{title}</h4>
        <TrelloCard />
      </div>
    </>
  );
};

export default TrelloList;
