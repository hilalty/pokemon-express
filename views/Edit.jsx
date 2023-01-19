const React = require('react');

class Edit extends React.Component{
  render() {
    const { name, id, image } = this.props.poke
    return (
      <>
      <h1>Edit Page</h1>
      <form action={`/pokemon/${id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name}/><br/>
          Image: <input type="text" name="image"  defaultValue={image}/><br/>
          <br/>
          <input type="submit" value="Update"/>
      </form>
      </>
    )
  }
}
module.exports= Edit;