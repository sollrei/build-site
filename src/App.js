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
import EditContent from './edit/EditContent';
import {editSection} from './action';

import './index.css';
import './style.css';

class App extends Component {

    render() {

        const {dispatch, slide, primary, full, leftContent, imageGallery, rightContent} = this.props;

        return (
            <div className="app-wrap">
                <div className="App">
                    <Header />
                    <Gallery
                        data={slide}
                    />
                    <PrimarySection
                        data={primary}
                        onClick={(id) => {
                            dispatch(editSection({
                                type: 'primary',
                                id: id
                            }))
                        }}
                    />
                    <FullWidth
                        section={full.section}
                        data={full.data}
                    />
                    <LeftContent
                        data={leftContent}
                    />
                    <ImageGallery
                        data={imageGallery}
                    />
                    <RightContent
                        data={rightContent}
                    />
                    <Footer />
                </div>
                <Menu />
                <EditContent {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const ConnectedIndex = connect(mapStateToProps)(App);

export default ConnectedIndex;
