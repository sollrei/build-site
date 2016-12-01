import React, {Component} from 'react';
import Editor from '../edit/Editor';
import Immutable from 'immutable';

export default class FullWidth extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return !Immutable.is(nextProps.data, this.props.data);
    }

    render () {

        console.log('render: full');

        const {data, changeData} = this.props;

        const d = data.get('data'),
            section = data.get('section');


        const dom = d.map((item, index) =>
            <div
                key={index}
                data-id={item.get('id')}
                className="flex-item"
            >
                <div className="text-title">
                    <Editor
                        editData={item.get('title')}
                        editEvent={(html) => {
                            changeData({
                                data: {
                                    id: item.get('id'),
                                    title: html
                                }
                            });
                        }}
                    />
                </div>
                <div className="text-main">
                    <Editor
                        editData={item.get('content')}
                        editEvent={(html) => {
                            changeData({
                                data: {
                                    id: item.get('id'),
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
                     style={{backgroundImage: 'url(' + section.get('img') + ')', height: '500px'}}
                >
                    <div className="title">
                        <Editor
                            editData={section.get('title')}
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
                            editData={section.get('desc')}
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


