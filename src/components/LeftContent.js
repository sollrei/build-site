import React from 'react';

const LeftContent = ({data}) => {
    return (
        <section className="app-left-content app-column2">
            <div className="layout">
                <div className="left">
                    <h3 className="title">{data.title}</h3>
                    <p className="content">{data.content}</p>
                    <div className="app-flex">
                        <div className="flex-item">
                            {
                                data.list.slice(0,3).map((item, index) => <p key={index}>{item}</p>)
                            }
                        </div>
                        <div className="flex-item">
                            {
                                data.list.slice(3).map((item, index) => <p key={index}>{item}</p>)
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