import React from 'react';

const sectionData = {
    title: 'A Startup Theme Like No Other',
    img: 'http://startit.select-themes.com/wp-content/uploads/2015/10/parallax-2-home-main.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam'
};

const data = [{
    title: '"Super support!"',
    main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'
},{
    title: '"Super support!"',
    main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'
},{
    title: '"Super support!"',
    main: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'
}];

const FullWidth = () => {
    const dom = data.map((item, index) =>
        <div key={index} className="flex-item">
            <p className="text-title">{item.title}</p>
            <p className="text-main">{item.main}</p>
        </div>
    );
    return (
        <section className="app-full">
            <div className="full-img" style={{backgroundImage: 'url(' + sectionData.img + ')', height: '500px'}}>
                <h3 className="title">{sectionData.title}</h3>
                <p className="desc">{sectionData.desc}</p>
                <div className="layout">
                    <div className="app-flex">
                        {dom}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FullWidth;

