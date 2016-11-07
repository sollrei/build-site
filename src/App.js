import React, {Component} from 'react';
import { connect } from 'react-redux';

/**
 * Page component
 * */

import Header from './components/Header';
import Gallery from './components/Gallery';
import PrimarySection from './components/Primary';
import FullWidth from './components/Full';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

import Menu from './edit/Menu';

import './index.css';
import './style.css';

class App extends Component {

    render() {

        console.log(this.props);

        return (
            <div className="app-wrap">
                <div className="App">
                    <Header />
                    <Gallery slide={this.props.slide}/>
                    <PrimarySection />
                    <FullWidth />
                    <LeftContent />
                    <ImageGallery />
                    <RightContent />
                    <Footer />
                </div>
                <Menu />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const ConnectedIndex = connect(mapStateToProps)(App);

export default ConnectedIndex;
