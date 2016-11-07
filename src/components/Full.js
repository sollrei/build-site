import React from 'react';

const FullWidth = ({section, data}) => {
    const dom = data.map((item, index) =>
        <div key={index} data-id={item.id} className="flex-item">
            <p className="text-title">{item.title}</p>
            <p className="text-main">{item.content}</p>
        </div>
    );
    return (
        <section className="app-full">
            <div className="full-img" style={{backgroundImage: 'url(' + section.img + ')', height: '500px'}}>
                <h3 className="title">{section.title}</h3>
                <p className="desc">{section.desc}</p>
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

