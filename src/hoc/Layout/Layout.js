import React, {Component} from 'react'
import Aux from '../Auxillary/Aux'
import classes from './layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

// REDUX
import {connect} from 'react-redux'


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState, props) => {
            return {showSideDrawer: false}
        })
    }
    
    sideDrawerToggleHandler = (props) => {
        this.setState((prevState, props) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return (
            <Aux>
                <Toolbar drawerToggleClicked =
                    {this.sideDrawerToggleHandler} 
                    isAuth={this.props.isAuthenticated}
                />
                <SideDrawer 
                    open = {this.state.showSideDrawer} 
                    closed ={this.sideDrawerClosedHandler} 
                    isAuth={this.props.isAuthenticated}
                />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)