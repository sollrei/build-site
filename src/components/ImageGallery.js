import React, {Component} from 'react';
import Immutable from 'immutable';

class ImageGallery extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return !Immutable.is(nextProps.data, this.props.data);
    }

    render () {
        const {data} = this.props;
        const d = data.toJS();

        const dom = d.map((item, index) =>
            <section data-id={item.id} key={index} className="flex-item">
                <img src={item.img} alt=""/>
                <div className="circle"></div>
                <div className="text">
                    <h4 className="title">{item.title}</h4>
                    <p className="name theme-ft-color">{item.content}</p>
                </div>
            </section>
        );


        return (
            <section className="app-image-gallery">
                <div className="app-flex">
                    {dom.slice(0,4)}
                </div>
                <div className="app-flex">
                    {dom.slice(4)}
                </div>
            </section>
        )
    }
}

export default ImageGallery;