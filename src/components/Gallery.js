import React, {Component} from 'react';

import $ from '../plugin/owl-carousel';

class Gallery extends Component {

    componentDidMount () {

        $("#owl-demo").owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true,
            loop: true,
            addClassActive: true
        });

    }

    render () {

        let dom = this.props.slide.map((item, index) =>
            {
                const img = 'url(' + item.image + ')';
                return <div key={index} className="item">
                    <div className="slide-item" style={{backgroundImage: img}}>
                        <div className="slide-content">
                            <h4 className="title">{item.title[0]} <br/> {item.title[1]}</h4>
                            <p className="desc">{item.content}</p>
                            <a className="button" href="#">BUY THE THEME</a>
                        </div>
                    </div>
                </div>
            }
        );

        console.log(this.props.slide, 'i am gallery');

        return (
            <div className="app-gallery">
                <div id="owl-demo" className="owl-carousel owl-theme">
                    {dom}
                </div>
            </div>
        )
    }
}

export default Gallery;