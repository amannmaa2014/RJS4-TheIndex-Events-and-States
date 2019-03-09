import React, { Component } from "react";

class AuthorDetail extends Component {
  render() {
    //map-loop- through each card in the table raws.
    const bookRows = this.props.authorDetailProp.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>
          {this.props.authorDetailProp.first_name}{" "}
          {this.props.authorDetailProp.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.authorDetailProp.first_name}{" "}
            {this.props.authorDetailProp.last_name}
          </h3>
          <img
            src={this.props.authorDetailProp.imageUrl}
            className="img-thumbnail"
            alt=" "
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bookRows}</tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
