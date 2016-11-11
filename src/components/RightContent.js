import React from 'react';
import Editor from '../edit/Editor';

const RightContent = ({data, changeData}) => {


    return (
        <section className="app-right-content app-column2">
            <div className="layout" style={{backgroundImage: 'url(' + data.image + ')'}}>
                <div className="right">
                    <div className="title">
                        <Editor
                            editData={data.title}
                            editEvent={(html) => {
                                changeData({
                                    title: html
                                })
                            }}
                            ele="h3"
                        />
                    </div>
                    <div className="content">
                        <Editor
                            editData={data.content}
                            editEvent={(html) => {
                                changeData({
                                    content: html
                                })
                            }}
                        />
                    </div>
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
            </div>
        </section>
    )
};

export default RightContent;