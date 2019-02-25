import React, {Component} from 'react'
import InputCheckBox from './InputCheckBox'
import InputNewElemBtn from './InputNewElemBtn'
import InputDelElemBtn from './InputDelElemBtn'
import InputSaveScreenBtn from './InputSaveScreenBtn'
import InputDelAllBtn from './InputDelAllBtn'
import InputLoadScreenBtn from './InputLoadScreenBtn'
import InputDialogPlace from './InputDialogPlace'

class Html2dPlace extends Component {
  constructor(){
    super();
    this.state = {
      visibilityChoose: 'hiddenModal',
      visibilityEntity: 'hiddenModal',
      visibilityDelete: 'hiddenModal'
    };
    // React components using ES6 classes no longer autobind `this` to non React methods. In your constructor, add:
    this.onNewElClicked = this.onNewElClicked.bind(this)
    this.onDelElClicked = this.onDelElClicked.bind(this)
  }
  onNewElClicked(){
    this.setState({
      visibilityChoose: 'visibleModal',
      visibilityEntity: 'hiddenModal',
      visibilityDelete: 'hiddenModal'
    });
  }
  onDelElClicked(){
    this.setState({
      visibilityChoose: 'hiddenModal',
      visibilityEntity: 'hiddenModal',
      visibilityDelete: 'visibleModal'
    });
  }
  render() {
    let dList = {entityes : [
      "sphere1",
      "sphere2",
      "sphere3",
      "cylinder1",
      "cylinder2",
      "box1"
    ]}

    return (
      <div id="html-2d-place">
        <h1>happy-users-react</h1>
        <InputCheckBox />
        <form className="modal hiddenModal" id="modal" encType='application/json' >

          <InputNewElemBtn new={this.onNewElClicked}/>
          <InputDelElemBtn del={this.onDelElClicked}/>
          <InputSaveScreenBtn />
          <InputDelAllBtn />
          <InputLoadScreenBtn />
          <InputDialogPlace
            stateChooseEntity = {this.state.visibilityChoose}
            stateTypeEntity = {this.state.visibilityEntity}
            stateDeleteEntity = {this.state.visibilityDelete}
            deleteList = {dList}
          />

        </form>
      </div>

    );
  }
}
export default Html2dPlace