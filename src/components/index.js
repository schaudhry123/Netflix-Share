import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Room from './protected/Room'
import { firebaseAuth } from '../config/constants'

import Header from './Header';
import About from './About';

require('../styles/Header.css');

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/room' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
    collapse: false
  }

  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    var collapse = this.state.collapse;
    this.setState({ collapse: !collapse });
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    const RoomComponent = () => {
      return (<Room toggleCollapse={this.toggleCollapse} />);
    }

    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <Header authed={this.state.authed} collapse={this.state.collapse} />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/room' component={RoomComponent} />
                <Route authed={this.state.authed} path='/about' component={About} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
