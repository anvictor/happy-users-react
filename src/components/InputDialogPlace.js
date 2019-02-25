import React, {Component} from 'react'
import ChoosePrimitive from './ChoosePrimitive'
import ListForDelete from './ListForDelete'
import CreateEntity from './CreateEntity'


class InputDialogPlace extends Component {

  constructor(props){
    super();
    this.state = {
      deleted: '',
      entityType: "entity Type",
      PX: -0.73,
      PY: 2.75,
      PZ: -3.77,
      RX: 36.5,
      RY: 24,
      RZ: 73,
      color: '#ff0000',
      ChoosePrimitiveVisibility: props.stateChooseEntity,
      CreateEntityVisibility: props.stateTypeEntity,
      DelPrimitiveVisibility: props.stateDeleteEntity
    };
    // React components using ES6 classes no longer autobind `this` to non React methods. In your constructor, add:
    this.onEntityChoosed = this.onEntityChoosed.bind(this)
    this.onEntityCreated = this.onEntityCreated.bind(this)
  }

  onDelEntity(deleted){
    console.log('onDelEntity')
    console.log(this.state.deleted)
    this.setState({
      deleted: deleted
    });
    console.log(this.state.deleted)
  }

  onEntityChoosed(entity){
    console.log('Entity Choosed: ' + this.state.entityType)
    this.setState({
      entityType: entity,
      CreateEntityVisibility: 'visibleModal',
      ChoosePrimitiveVisibility: 'hiddenModal'
    });
  }

  onEntityCreated(created){
    console.log('Entity Created works: ')
    console.log(created)
    this.setState({
      CreateEntityVisibility: 'hiddenModal',
    });
  }

  // Basically, whenever you assign parent's props to a child's state
  // the render method isn't always called on prop update.
  // You have to invoke it manually,
  // using the componentWillReceiveProps method.
  // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
  // UNSAFE_componentWillReceiveProps && componentWillReceiveProps both works now
  // but in future only componentWillReceiveProps will work
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.stateChooseEntity !== this.state.ChoosePrimitiveVisibility) {
      this.setState({ ChoosePrimitiveVisibility: nextProps.stateChooseEntity });
    }
    if (nextProps.stateTypeEntity !== this.state.CreateEntityVisibility) {
      this.setState({ CreateEntityVisibility: nextProps.stateTypeEntity });
    }
    if (nextProps.stateDeleteEntity !== this.state.DelPrimitiveVisibility) {
      this.setState({ DelPrimitiveVisibility: nextProps.stateDeleteEntity });
    }

  }

  render() {
     return (
      <div id="dialog">
        <ChoosePrimitive
          visibility = {this.state.ChoosePrimitiveVisibility}
          entityChoosed = {this.onEntityChoosed.bind(this)}
        />
        <CreateEntity
          visibility = {this.state.CreateEntityVisibility}
          entityType = {this.state.entityType}
          PX = {this.state.PX}
          PY = {this.state.PY}
          PZ = {this.state.PZ}
          RX = {this.state.RX}
          RY = {this.state.RY}
          RZ = {this.state.RZ}
          color = {this.state.color}
          entityCreated = {this.onEntityCreated.bind(this)}
        />
        <ListForDelete visibility = {this.state.DelPrimitiveVisibility} content = {this.props.deleteList.entityes} delEntity={this.onDelEntity.bind(this)}/>
      </div>
    );
  }
}
export default InputDialogPlace