import React, {Component} from 'react'
class InputDelAllBtn extends Component {
  handleClick() {
    console.log('Click InputDelAllBtn');
  }
  render() {
    return (
      <input onClick={() => this.handleClick()} className="menuBtn" name="deleteAllBtn" type="button" value='(X...X) delete all elements'/>
    );
  }
}
export default InputDelAllBtn