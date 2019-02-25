import React, {Component} from 'react'

class CreateEntity extends Component {
  constructor(){
    super();
    this.state = {
      deleted: "del",
      created: "create",
      entityType: "spheroCylinder",
      PX: -0.73,
      PY: 2.75,
      PZ: -3.77,
      RX: 36.5,
      RY: 24,
      RZ: 73,
      color: '#ff0000',
      CreateEntityVisibility: 'props.visibility'
    };
    this.onChangeIPX = this.onChangeIPX.bind(this);
    this.onChangeIPY = this.onChangeIPY.bind(this);
    this.onChangeIPZ = this.onChangeIPZ.bind(this);
    this.onChangeIRX = this.onChangeIRX.bind(this);
    this.onChangeIRY = this.onChangeIRY.bind(this);
    this.onChangeIRZ = this.onChangeIRZ.bind(this);
    this.onChangeIColor = this.onChangeIColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();

    let entityProps = {
      entityType: e.target.value,
      PX: this.state.PX,
      PY: this.state.PY,
      PZ: this.state.PZ,
      RX: this.state.RX,
      RY: this.state.RY,
      RZ: this.state.RZ,
      color: this.state.color,
    };
    this.props.entityCreated(entityProps);
  }
  onChangeIPX(e){ this.setState({ PX: e.target.value}); }
  onChangeIPY(e){ this.setState({ PY: e.target.value}); }
  onChangeIPZ(e){ this.setState({ PZ: e.target.value}); }
  onChangeIRX(e){ this.setState({ RX: e.target.value}); }
  onChangeIRY(e){ this.setState({ RY: e.target.value}); }
  onChangeIRZ(e){ this.setState({ RZ: e.target.value}); }
  onChangeIColor(e){ this.setState({ color: e.target.value}); }
  render() {


    return (

      <ul className={"ulModal " + this.props.visibility} >
          <li className="liModal textCaption">
            <label htmlFor="createBtn">adding a new </label> <input onClick={this.handleClick} type="submit" id="createBtn" value={this.props.entityType} />
          </li>
          <li className="liModal textCaption">
            <label htmlFor="positionXGeometry">Position&nbsp;:&nbsp;&nbsp; (PX, PY, PZ) </label>
            <input onChange={this.onChangeIPX} type="text" className="coord" id="positionXGeometry" placeholder="PX" defaultValue={this.props.PX}/>
            <input onChange={this.onChangeIPY} type="text" className="coord" id="positionYGeometry" placeholder="PY" defaultValue={this.props.PY}/>
            <input onChange={this.onChangeIPZ} type="text" className="coord" id="positionZGeometry" placeholder="PZ" defaultValue={this.props.PZ}/>
          </li>
          <li className="liModal textCaption">
            <label htmlFor="rotationXGeometry">Rotation&nbsp;:&nbsp;&nbsp; (RX, RY, RZ) </label>
            <input onChange={this.onChangeIRX} type="text" className="coord" id="rotationXGeometry" placeholder="RX" defaultValue={this.props.RX}/>
            <input onChange={this.onChangeIRY} type="text" className="coord" id="rotationYGeometry" placeholder="RY" defaultValue={this.props.RY}/>
            <input onChange={this.onChangeIRZ} type="text" className="coord" id="rotationZGeometry" placeholder="RZ" defaultValue={this.props.RZ}/>
          </li>
          <li className="liModal textCaption">
            <label htmlFor="colorGeometry">Color: </label><input onChange={this.onChangeIColor} type="color" id="colorGeometry" defaultValue={this.props.color}/>
          </li>



      </ul>
    );
  }
}
export default CreateEntity