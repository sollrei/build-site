import React from 'react';

const data1 = [{
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-office-management-systems-800x600.jpg',
    title: 'Project',
    name: 'Odf / Janny'
}, {
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-new-trends-in-seo-and-analytics-800x600.jpg',
    title: 'Take Join',
    name: 'Jdf / Serrl'
}, {
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-app-update-and-rebrand-800x600.jpg',
    title: 'May Jee L',
    name: 'Danc / teach'
},{
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-the-tablet-app-of-the-future-800x600.jpg',
    title: 'Have Fun',
    name: 'Iris / Viewl'
}];
const data2 = [{
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-big-data-goes-global-800x600.jpg',
    title: 'Page View',
    name: 'A / D.Jsdf'
}, {
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-new-findings-in-responsive-testing-800x600.jpg',
    title: 'Component View',
    name: 'A / Day'
}, {
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-millenials-research-2015-800x600.jpg',
    title: 'Life Cycle',
    name: 'Resf / Nice'
}, {
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/p-new-trends-in-social-media-800x600.jpg',
    title: 'New Website',
    name: 'Joiny / Tack'
}];

const ImageGallery = () => {
    const dom1 = data1.map((item, index) =>
        <section key={index} className="flex-item">
            <img src={item.img} alt=""/>
            <div className="circle"></div>
            <div className="text">
                <h4 className="title">{item.title}</h4>
                <p className="name">{item.name}</p>
            </div>
        </section>
    );
    const dom2 = data2.map((item, index) =>
        <section key={index} className="flex-item">
            <img src={item.img} alt=""/>
            <div className="circle"></div>
            <div className="text">
                <h4 className="title">{item.title}</h4>
                <p className="name theme-ft-color">{item.name}</p>
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