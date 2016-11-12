import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Header extends Component {

    render () {
        return (
            <header className="app-header">
                <h1 className="app-title">
                    <img className="app-logo" src="http://startit.select-themes.com/wp-content/uploads/2015/11/logo-light.png" alt="light logo"/>
                </h1>
                <nav className="app-nav">
                    <Link to="/index" activeClassName="active">Home</Link>
                    <Link to="/page" activeClassName="active">Contact</Link>
                </nav>
            </header>
        )
    }

}