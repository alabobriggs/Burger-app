import React, {Component} from 'react'
// import classes from './PopOver.css'

class PopOver extends Component {

    render(){
        const style = {
            position: 'absolute',
            top: '0',
            left: '100 %',
            boxShadow: '0 2px 3px #ccc',
            height: '50px',
            backgroundColor: 'white',
            padding: '10px 20px',
            zIndex: '1000',
            transition: '2s all'
        }

        return (
            <span style={style}>{this.props.name}</span>
        )
    }
}

export default PopOver