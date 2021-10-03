import React, {Component, StrictMode} from 'react'

import ReactDOM from 'react-dom'

import {
  Router,
  Route,
  Redirect,
  browserHistory,
} from "react-router";

class Logout extends Component {
  render() {
    return (
      <div>
        <h1>Logout</h1>
        <button onClick={() => browserHistory.push('/login')}>Login</button>
      </div>
    )
  }
}
class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={() => browserHistory.push('/logout')}>Logout</button>
      </div>
    )
  }
}
class Main extends Component {
  render() {
    return (
      <StrictMode>
        <Router history={browserHistory}>
          <Route path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/login" />
        </Router>
      </StrictMode>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("wrapper"));
