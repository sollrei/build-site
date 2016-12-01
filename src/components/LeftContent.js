import React, {Component} from 'react';
import Editor from '../edit/Editor';

export default class LeftContent extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return !Immutable.is(nextProps.data, this.props.data);
    }

    render () {
        console.log('render leftcontent');

        const {data, changeData} = this.props;

        const d = data.toJS();

        return (
            <div className="dropzone drop-bg">
                <section className="app-left-content app-column2 drop-content">
                    <div className="layout" style={{backgroundImage: 'url(' + d.image + ')'}}>
                        <div className="left">
                            <div className="title dropzone drop-txt">
                                <Editor
                                    editData={d.title}
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
                                    editData={d.content}
                                    editEvent={(html) => {
                                        changeData({
                                            content: html
                                        })
                                    }}
                                />
                            </div>
                            <div className="app-flex dropzone drop-txt">
                                <div className="flex-item">
                                    { d.list.slice(0,3).map((item, index) => <p key={index}>{item}</p>) }
                                </div>
                                <div className="flex-item">
                                    { d.list.slice(3).map((item, index) => <p key={index}>{item}</p>) }
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }

};
