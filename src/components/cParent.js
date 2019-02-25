import React, {Component} from 'react'
import Child from './child'
import Sibling from "./sibling";

class Parent extends Component {
  constructor(){
    super();
    this.state = {
      title: "Title_"
    };
  }
  onGreet(){
    alert('Hello!');
  }
  onChangeTitle(newTitle){
    this.setState({
      title: newTitle
    });
  }
  render() {
    console.log('Parent have received: ');
    console.dir(this.props);
    var user = {
      name: "Anna",
      hobbies: ["Sports", "Painting"]
    };

    return (
      <div>
        <p>parent</p>
        <hr/>
        <Sibling title={this.state.title}></Sibling>
        <hr/>
        <Child homeLink={"Title_"}
                name={"Max"}
               initialAge={27}
               user={user}
               greet={this.onGreet}
               changeTitle={this.onChangeTitle.bind(this)}/>
          <p>Additional paragraph! 0</p>
        <hr/>
      </div>
    );
  }
}
export default Parent