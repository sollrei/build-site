import React, {Component} from 'react';

import OwlCarousel from 'react-owl-carousel';
class Gallery extends Component {

    render () {

        let dom = this.props.data.map((item, index) =>
            {
                const img = 'url(' + item.image + ')';
                return <div key={index} className="item">
                    <div className="slide-item" style={{backgroundImage: img}}>
                        <div className="slide-content">
                            <h4
                                className="title"
                                dangerouslySetInnerHTML={{__html: item.title}}
                            />
                            <p className="desc">{item.content}</p>
                            <a className="button" href="#">{item.button}</a>
                        </div>
                    </div>
                </div>
            }
        );

        return (
            <div className="app-gallery">
                <div id="owl-demo" >
                    <OwlCarousel className="owl-carousel owl-theme"
                         slideSpeed={300}
                         singleItem
                         autoPlay
                         loop
                         addClassActive
                    >
                        {dom}
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default Gallery;