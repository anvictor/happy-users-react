import React, {Component} from 'react'

class InputCheckBox extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleClick() {
    const burgerSign = this.myRef.current.nextElementSibling.children[0];
    const formContainer = this.myRef.current;

    if (this._reactInternalFiber.child.child.stateNode.checked) {
      formContainer.offsetParent.children[2].className = 'modal visibleModal';
      burgerSign.className = 'active';
    } else {
      formContainer.offsetParent.children[2].className = 'modal hiddenModal';
      burgerSign.className = '';
    }
  }
  state = {
    visible: (true) ? 'visible': 'hidden'
  }
  render() {
    return (
      <div>
        <input onClick={() => this.handleClick()} type="checkbox" id="burgerChkbx" ref={this.myRef}/>
        <label htmlFor="burgerChkbx">
          <div id="menu">
            <div className="line" />
          </div>
        </label>
      </div>
    );
  }
}
export default InputCheckBox