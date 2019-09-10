import React, { Component } from "react"
import Nav from "../nav/Nav"
import HomeMessage from "./HomeMessage"

class Home extends Component {
    render() {
      return (
          <React.Fragment>
            <Nav />
            <HomeMessage
                {...this.props} />
          </React.Fragment>
      )
    }
  }
  
  export default Home