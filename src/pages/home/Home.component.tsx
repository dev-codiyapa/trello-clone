import React from "react";
import { IHomeProps, IHomeState } from "./interfaces";
import TrelloList from "../../components/trello-list/TrelloList.component";
import { connect } from "react-redux";
import "./Home.component.css";

const mapStateToProps = (state: any) => {
  return {
    list: state.lists
  };
};

// const mapDispatchToProps = () => ({

// })

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
                />
              );
            })}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(Home);
