const React = require("react");

class New extends React.Component {
  render() {
    return (
      <>
        <h1> New Pokemon Page </h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          Image: <input type="text" name="image" />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </>
    );
  }
}

module.exports = New;
