import {Route, Redirect} from "react-router-dom"
import React, { Component } from "react"
import Landing from "./landing/Landing"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Home from "./home/Home"
import Search from "./search/Search"
import AddLocation from "./addlocation/AddLocation"
import MyLocations from "./mylocations/MyLocations"
import EditLocation from "./mylocations/deletelater"

class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    render() {
      return (
        <React.Fragment>
          <Route exact path ="/landing" render={props => {
              return <Landing {...props} />
          }}/>  
          <Route exact path ="/login" render={props => {
            if (this.isAuthenticated()) {
              return <Redirect to="/" />
            } 
            return <Login {...props} />
          }}/>
          <Route exact path ="/register" render={props => {
            if (this.isAuthenticated()) {
              return <Redirect to="/" />
            } 
            return <Register {...props} />
          }}/>
          <Route exact path ="/" render={props => {
              if (this.isAuthenticated()) {
                return (
                <Home {...props} />
                )
              } 
              return <Redirect to="/landing" />
            }}/>
          <Route exact path ="/search" render={props => {
              if (this.isAuthenticated()) {
                return (
                <Search {...props} />
                )
              } 
              return <Redirect to="/landing" />
            }}/>
          <Route exact path ="/add" render={props => {
              if (this.isAuthenticated()) {
                return (
                <AddLocation {...props} />
                )
              } 
              return <Redirect to="/landing" />
            }}/>
          <Route exact path ="/mylocations" render={props => {
              if (this.isAuthenticated()) {
                return (
                <MyLocations {...props} />
                )
              } 
              return <Redirect to="/landing" />
            }}/>
          <Route exact path ="/home" render={props => {
              if (this.isAuthenticated()) {
                return (
                <Home {...props} />
                )
              } 
              return <Redirect to="/landing" />
            }}/>  
          <Route exact path ="/logout" render={props => {
              return <Redirect to="/landing" />
            }}/>
          <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <EditLocation {...props} />
        }} />     
        
        </React.Fragment>
      );
    }
  }

export default ApplicationViews