const React = require("react");

class Show extends React.Component {
  render() {
    const poke = this.props.poke;

    return (
      <div>
        <h1>Pokemon Show Page</h1>
        <nav>
          <a href="/pokemon">Back</a>
        </nav>
        The {this.props.poke.name} is waiting in Poke Ball! 
        {this.props.poke.image}
      </div>
    );
  }
}

module.exports = Show;
