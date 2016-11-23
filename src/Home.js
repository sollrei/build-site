import React, {Component} from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import PrimarySection from './components/Primary';
import FullWidth from './components/Full';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

import { connect } from 'react-redux';


import {editSection, editLeftContent, editFull, editRightContent} from './store/action';

class Home extends Component {

    render () {

        const {dispatch,
            slide, primary, full, leftContent, imageGallery, rightContent, editable, route
        } = this.props;

        const Model = route.model;

        console.log(Model.getValue('siteData.slide[0].id'));

        return (
            <div className="App">
                <Header />
                <Gallery
                    data={slide}
                />
                <PrimarySection
                    data={primary}
                    editable={editable}
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
                    changeData={(data) => {
                        dispatch(editFull(data));
                    }}
                />
                <LeftContent
                    data={leftContent}
                    changeData={(data) => {
                        dispatch(editLeftContent(data));
                    }}
                />
                <ImageGallery
                    data={imageGallery}
                />
                <RightContent
                    data={rightContent}
                    changeData={(data) => {
                        dispatch(editRightContent(data));
                    }}
                />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state;
};

const ConnectedIndex = connect(mapStateToProps)(Home);

export default ConnectedIndex;