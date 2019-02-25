
import React, { Component } from 'react'
import './App.css'
import './components/Html2dPlace'
import Html2dPlace from "./components/Html2dPlace"
import ScenePlace from "./components/ScenePlace"
import Parent from './components/cParent'
import AppController from './components/AppController'
class App extends Component {
  render() {
    return (
      <div className="App">

        <Html2dPlace/>
        {/*<Parent/>*/}
        <ScenePlace/>
        <AppController/>
      </div>
    )
  }
}

export default App
