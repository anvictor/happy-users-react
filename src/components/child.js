import React, {Component} from 'react'

export class Child extends Component{
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      title: "Title_0"
    };
    setTimeout(() => {
   this.setState({
     status: 1
   })
    }, 3000);
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age +1
    });
  }
  onChangeTitle2(){
    this.props.changeTitle(this.state.title);
  }
  render(){
    var text = 'Something!'
    // console.log(this.props);
    return(
      <div>
        <p>{this.props.title}</p>
        <p>child</p>
        <p>{text}</p>
        <p>name: {this.props.name} age: {this.state.age}</p>
        <p>User Object => Name: {this.props.user.name}</p>
        <p>Status = {this.state.status}</p>
        <ul>
          {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>

        {this.props.children}

        <button onClick={this.onMakeOlder.bind(this) } >Make Age Older!</button>
        <button onClick={this.props.greet}>Greet</button>
        <button onClick={this.onChangeTitle2.bind(this)}>Change title</button>
      </div>
    );
  }
}

export default Child
