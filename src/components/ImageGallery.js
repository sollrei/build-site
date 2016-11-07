import React from 'react';

const ImageGallery = ({data}) => {
    const dom1 = data.slice(0,4).map((item, index) =>
        <section data-id={item.id} key={index} className="flex-item">
            <img src={item.img} alt=""/>
            <div className="circle"></div>
            <div className="text">
                <h4 className="title">{item.title}</h4>
                <p className="name">{item.content}</p>
            </div>
        </section>
    );
    const dom2 = data.slice(4).map((item, index) =>
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
                {dom1}
            </div>
            <div className="app-flex">
                {dom2}
            </div>
        </section>
    )
};

export default ImageGallery;