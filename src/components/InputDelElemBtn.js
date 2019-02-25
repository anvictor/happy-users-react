import React, {Component} from 'react'


class InputDelElemBtn extends Component {

  render() {
    return (
      <input onClick={this.props.del} className="menuBtn" name="delElemBtn" type="button" value='(X) delete an element from scene'/>
    );
  }
}
export default InputDelElemBtn