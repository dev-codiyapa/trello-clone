import React from "react";
import { ITrelloListProps } from "./interfaces";
import "./TrelloList.component.css";
import TrelloCard from "../trello-card/TrelloCard.component";
import CardActionBtn from "../card-action-btn/CardActionBtn.component";

const TrelloList: React.FC<ITrelloListProps> = props => {
  let { title, cards } = { ...props };
  console.log("cards in card list is ===>", cards);
  return (
    <>
      <div className="container">
        <h4>{title}</h4>
        {cards && cards.length && cards.map(item => {
            return <TrelloCard key={item.id} text={item.text}/>
        })}
        <CardActionBtn list=""/>
      </div>
    </>
  );
};

export default TrelloList;
