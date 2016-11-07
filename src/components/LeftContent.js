import React, {Component} from 'react';

export default class LeftContent extends Component {

    componentDidMount () {
        let editor = window.CKEDITOR.inline('editor1', {toolbar: "Basic"} );

        editor.on('change', (evt) => {

        });

        window.CKEDITOR.inline('editor-content', {toolbar: "Basic"} );
    }

    render () {
        const {data} = this.props;

        return (
            <div>
                <section className="app-left-content app-column2">
                    <div className="layout">
                        <div className="left">
                            <h3
                                className="title editor-wrapper"
                                id="editor1"
                                suppressContentEditableWarning
                                contentEditable
                            >{data.title}</h3>
                            <div
                                id="editor-content"
                                className="content editor-wrapper"
                                suppressContentEditableWarning
                                contentEditable
                            >{data.content}</div>
                            <div className="app-flex">
                                <div className="flex-item">
                                    { data.list.slice(0,3).map((item, index) => <p key={index}>{item}</p>) }
                                </div>
                                <div className="flex-item">
                                    { data.list.slice(3).map((item, index) => <p key={index}>{item}</p>) }
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
            </div>

        )
    }

};
