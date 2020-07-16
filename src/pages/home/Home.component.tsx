import React from "react";
import { IHomeProps, IHomeState } from "./interfaces";
import TrelloList from "../../components/trello-list/TrelloList.component";

class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <>
        <TrelloList title="TODO" />
      </>
    );
  }
}

export default Home;
