import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import {Route, Switch, withRouter} from 'react-router-dom'
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/index'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup()
  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} exact />
          <Route path='/' component={BurgerBuilder} exact />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App));
