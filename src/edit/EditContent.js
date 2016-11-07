import React, {Component} from 'react';
import {closeEdit, editPrimary} from '../action';

export default class EditContent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render () {
        const {dispatch, editContent} = this.props;

        let classN = editContent.edit
            ? 'edit-box show'
            : 'edit-box',
            data,
            dom = <div>hi</div>;

        const d = editContent.data;


        if (d) {
            data = this.props[d.type];

            const dt = data.filter((item) => {
                return item.id === d.id;
            });

            dom = dt.map((item, index) => {

                return <div key={index}>
                    <section data-id={item.id} className="edit-section">
                        <h4 className="edit-title">标题</h4>
                        <textarea data-id={item.id}
                                  className="title-edit"
                                  value={item.title}
                                  onChange={(e) => {
                                      dispatch(editPrimary({
                                          id: item.id,
                                          title: e.nativeEvent.target.value
                                      }));
                                  }}
                        />
                    </section>
                    <section data-id={item.id} className="edit-section">
                        <h4 className="edit-title">内容</h4>
                        <textarea
                            data-id={item.id}
                            className="content-edit"
                            value={item.content}
                            onChange={(e) => {
                                dispatch(editPrimary({
                                    id: item.id,
                                    content: e.nativeEvent.target.value
                                }));
                            }}
                        />
                    </section>
                </div>
            });
        }

        return (
            <div className={classN}>
                <div className="close iconfont"
                    onClick={() => {
                        this.props.dispatch(closeEdit());
                    }}
                >
                    <span className="icon-close"></span>
                </div>
                {dom}
            </div>
        )
    }

}
