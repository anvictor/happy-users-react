import React, {Component} from 'react'

class InputNewElemBtn extends Component {

  render() {
    return (
      <input onClick={this.props.new} className="menuBtn" name="newElemBtn" type="button" value='&#9660; add new element to a 3d scene'/>
    );
  }
}


export default InputNewElemBtn