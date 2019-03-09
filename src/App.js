import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    //null happens on purpose while undefined heppens accidentally
    currentAuthor: null,
    filteredAuthors: authors //the whole authorsList.
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  unselectAuthor = () => this.setState({ currentAuthor: null });

  //check then return T || F , if the Q is the right combination of 1stName and LName.
  filterAuthorsFn = query =>
    this.setState({
      filteredAuthors: authors.filter(author =>
        `${author.first_name} ${author.last_name}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    });
  //if select the current author then return(show) the detail for selected author.
  getAuthorDetails = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail authorDetailProp={this.state.currentAuthor} />;
    } else {
      //if not selected then show the list and allow search(filtering) then call the function that allows author selection.
      return (
        <AuthorsList
          authorsProp={this.state.filteredAuthors}
          selectAuthorProp={this.selectAuthor}
          filterAithorsProp={this.filterAuthorsFn}
        />
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthorProp={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.getAuthorDetails()}</div>
        </div>
      </div>
    );
  }
}

export default App;
