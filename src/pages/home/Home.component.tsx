import React from "react";
import { IHomeProps, IHomeState } from "./interfaces";
import TrelloList from "../../components/trello-list/TrelloList.component";
import { connect } from "react-redux";
import "./Home.component.css";
import CardActionBtn from "../../components/card-action-btn/CardActionBtn.component";

const mapStateToProps = (state: any) => {
  return {
    list: state.lists
  };
};

class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    const { list } = this.props;
    return (
      <>
        <div className="list-container">
          {list &&
            list.data &&
            list.data.map((item: any) => {
              return (
                <TrelloList
                  key={item.id}
                  title={item.title}
                  cards={item.card}
                  listId={item.id}
                />
              );
            })}
            <CardActionBtn type="list" listId={1}/>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(Home);
