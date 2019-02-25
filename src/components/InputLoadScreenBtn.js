import React, {Component} from 'react'

class InputLoadScreenBtn extends Component {
  handleClick() {
    console.log('Click InputLoadScreenBtn');
  }
  render() {
    return (
      <input onClick={() => this.handleClick()} className="menuBtn" name="loadSceneBtn" type="button" value='&#9658; load scene from saved'/>
    );
  }
}
export default InputLoadScreenBtn