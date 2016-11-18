import React from 'react';
import Editor from '../edit/Editor';

const RightContent = ({data, changeData}) => {


    return (
        <div className="dropzone drop-bg">
            <section className="app-right-content app-column2 drop-content">
                <div className="layout" style={{backgroundImage: 'url(' + data.image + ')'}}>
                    <div className="right">
                        <div className="title dropzone drop-txt">
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
                        <div className="content dropzone drop-txt">
                            <Editor
                                editData={data.content}
                                editEvent={(html) => {
                                    changeData({
                                        content: html
                                    })
                                }}
                            />
                        </div>
                        <div className="app-flex dropzone drop-txt">
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
        </div>
    )
};

export default RightContent;