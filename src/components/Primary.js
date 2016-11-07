import React from 'react';

const data = [{
    title: 'Pixel-Perfect Design',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    icon: 'icon-training'
},{
    title: 'Free Plugins Included',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    icon:  'icon-all'
},{
    title: 'Extensive Documentation',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    icon: 'icon-clock'
},{
    title: 'WooCommerce',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut',
    icon: 'icon-form'
}];

const PrimarySection = () => {
    const dom = data.map((item, index) =>
        <div key={index} className="flex-item">
            <div className="iconfont">
                <span className={item.icon + ' theme-ft-color'}>&nbsp;</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    );
    return (
        <section className="app-primary">
            <div className="layout">
                <div className="app-flex">
                    {dom}
                </div>
            </div>
        </section>
    )
};

export default PrimarySection;