import React, {Component} from 'react'

class InputSaveScreenBtn extends Component {
  handleClick() {
    console.log('Click InputSaveScreenBtn');
  }
  render() {
    return (
      <input onClick={() => this.handleClick()} className="menuBtn" name="saveSceneBtn" type="button" value='&#9668; save scene'/>
    );
  }
}
export default InputSaveScreenBtn