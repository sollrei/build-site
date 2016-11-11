import React from 'react';
import Editor from '../edit/Editor';

const Contact = ({data, editable}) => {
    return (
        <div className="contact">
            <div className="title">
                <Editor
                    edit={editable}
                    editData={data.title}
                    editEvent={() => {
                        console.log('hello')
                    }}
                />
            </div>
            <div className="content">
                <Editor
                    edit={editable}
                    editData={data.content}

                />
            </div>
            <div className="app-flex">
                <div className="flex-item">
                    <div className="iconfont">
                        <span className="icon-phone"></span>
                    </div>
                    <div className="sub-title">销售热线</div>
                    <div className="sub-content">
                        <Editor
                            edit={editable}
                            editData={data.phone}
                        />
                    </div>
                </div>
                <div className="flex-item">
                    <div className="iconfont">
                        <span className="icon-email"></span>
                    </div>
                    <div className="sub-title">电子邮箱</div>
                    <div className="sub-content">
                        <Editor
                            edit={editable}
                            editData={data.email}
                        />
                    </div>
                </div>
                <div className="flex-item">
                    <div className="iconfont">
                        <span className="icon-service"></span>
                    </div>
                    <div className="sub-title">在线客服</div>
                </div>
            </div>
        </div>
    )
};

export default Contact;

