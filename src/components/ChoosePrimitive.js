import React, {Component} from 'react'


class ChoosePrimitive extends Component {
  handleClick(entity) {
    this.props.entityChoosed(entity);
  }
  render() {
    return (
      <ul id="choose-primitive" className={"ulModal " + this.props.visibility} >
        <li id = 'sphereInp' className = 'liModal textCaption' onClick={() => this.handleClick('sphere')}>sphere</li>
        <li id = 'cilinderInp' className = 'liModal textCaption' onClick={() => this.handleClick('cylinder')}>cylinder</li>
        <li id = 'boxInp' className = 'liModal textCaption' onClick={() => this.handleClick('box')}>box</li>

      </ul>
    );
  }
}
export default ChoosePrimitive