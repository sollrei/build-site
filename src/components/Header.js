import React, {Component} from 'react';

export default class Header extends Component {

    render () {
        return (
            <header className="app-header">
                <h1 className="app-title">
                    <img className="app-logo" src="http://startit.select-themes.com/wp-content/uploads/2015/11/logo-light.png" alt="light logo"/>
                </h1>
                <nav className="app-nav">
                    <ul>
                        <li className="active">HOME</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </header>
        )
    }

}