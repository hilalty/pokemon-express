const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>Pokemon Index Page</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon For Yourself!</a>
        </nav>
        <ul>
          {this.props.pokemon.map((poke, i) => {
            return (
              <li key={i}>
                The <a href={`/pokemon/${poke.id}`}> {poke.name} </a> is waiting in Poke Ball! {poke.image}
                    <form
                  action={`/pokemon/${poke._id}?_method=DELETE`}
                  method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form action={`/pokemon/${poke._id}/edit`} method="GET">
                    <input type="submit" value="UPDATE" />
                  </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;