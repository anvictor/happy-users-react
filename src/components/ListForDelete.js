import React, {Component} from 'react'


class ListForDelete extends Component {
  constructor(props){
    super();
    this.state = {
      deleted: "empty",
      visibility: props.visibility
    };
    // React components using ES6 classes no longer autobind `this` to non React methods. In your constructor, add:
this.handleClick = this.handleClick.bind(this)
}

  handleClick() {
    console.log(this);
    setTimeout(() => {
      this.setState({
        visibility: 'hiddenModal'
      })
    }, 300);
    this.setState({
      deleted: this
    });
    this.props.delEntity(this)
  }
  render() {
    console.log("ListForDelete/props");
    console.log(this.props);

    return (
      <ul className={"ulModal " + this.props.visibility}>
        {this.props.content.map(
          (entity, i) => <li key={i} className = 'liModal textCaption' onClick={this.handleClick.bind(this.props.content[i])}>{entity}</li>
        )}
      </ul>
    );
  }
}
export default ListForDelete