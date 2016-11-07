import React from 'react';

const data = {
    title: 'What Are You Waiting For? StartIt Today!',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sediam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    list: {
        left: ['Make a difference', 'Unmatched power', 'Retina ready'],
        right: ['Satisfied clients', 'Control the design', 'Imagine and create']
    },
    image: 'http://startit.select-themes.com/wp-content/uploads/2015/10/image-2-home-main.jpg'
};

const LeftContent = () => {
    return (
        <section className="app-left-content">
            <div className="layout">
                <div className="left">
                    <h3 className="title">{data.title}</h3>
                    <p className="content">{data.contet}</p>
                    <div className="app-flex">
                        <div className="flex-item">
                            {
                                data.list.left.map((item, index) => <p key={index}>{item}</p>)
                            }
                        </div>
                        <div className="flex-item">
                            {
                                data.list.right.map((item, index) => <p key={index}>{item}</p>)
                            }
                        </div>
                    </div>
                </div>
                <div className="right app-image">
                    <img width="551"
                         height="500"
                         src={data.image}
                         className="image"
                         alt="a"
                         sizes="(max-width: 551px) 100vw, 551px" />
                </div>
            </div>
        </section>
    )
};

export default LeftContent;