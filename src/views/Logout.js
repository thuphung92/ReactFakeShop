import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
 
export default class Logout extends Component {
    componentDidMount() {this.props.doLogout()}

    render() {
        return (
            <div>
                Goodbye
                <Redirect to={{pathname: '/login'}}/>
            </div>
        )
    }
}