import React, {Component} from 'react';
import Editor from '../edit/Editor';

export default class FullWidth extends Component {

    shouldComponentUpdate () {
        return false;
    }

    render () {

        console.log('render: full');

        const {data, section, changeData} = this.props;

        const dom = data.map((item, index) =>
            <div
                key={index}
                data-id={item.id}
                className="flex-item"
            >
                <div className="text-title">
                    <Editor
                        editData={item.title}
                        editEvent={(html) => {
                            changeData({
                                data: {
                                    id: item.id,
                                    title: html
                                }
                            });
                        }}
                    />
                </div>
                <div className="text-main">
                    <Editor
                        editData={item.content}
                        editEvent={(html) => {
                            changeData({
                                data: {
                                    id: item.id,
                                    content: html
                                }
                            });
                        }}
                    />
                </div>
            </div>
        );

        return (
            <section className="app-full">
                <div className="full-img"
                     style={{backgroundImage: 'url(' + section.img + ')', height: '500px'}}
                >
                    <div className="title">
                        <Editor
                            editData={section.title}
                            editEvent={(html) => {
                                changeData({
                                    section: {
                                        title: html
                                    }
                                });
                            }}
                        />
                    </div>
                    <div className="desc">
                        <Editor
                            editData={section.desc}
                            editEvent={(html) => {
                                changeData({
                                    section: {
                                        desc: html
                                    }
                                });
                            }}
                        />
                    </div>
                    <div className="layout">
                        <div className="app-flex">
                            {dom}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};


