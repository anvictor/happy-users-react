import React, {Component} from 'react'

export class Sibling extends Component {
      render()
    {
      return (
        <div>
          <p>sibling component</p>
          <p>{this.props.title}</p>
          </div>
      );
    }

}
export default Sibling
