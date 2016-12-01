import React, {Component} from 'react';
import {closeEdit, editPrimary} from '../store/action';

export default class EditContent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render () {
        const {dispatch, editContent, state} = this.props;

        let classN = editContent.get('edit')
            ? 'edit-box show'
            : 'edit-box',
            data,
            dom = <div>hi</div>;

        const d = editContent.get('data');

        if (d) {
            const type = d.get('type');
            data = state.get(type);

            const dt = data.filter(item => {
                return item.get('id') === d.get('id');
            });

            dom = dt.map((item, index) => {

                const id = item.get('id'),
                    title = item.get('title'),
                    content = item.get('content');

                return <div key={index}>
                    <section data-id={id} className="edit-section">
                        <h4 className="edit-title">标题</h4>
                        <textarea
                            data-id={id}
                              className="title-edit"
                              value={title}
                              onChange={(e) => {
                                  dispatch(editPrimary({
                                      id: id,
                                      title: e.nativeEvent.target.value
                                  }));
                              }}
                        />
                    </section>
                    <section data-id={id} className="edit-section">
                        <h4 className="edit-title">内容</h4>
                        <textarea
                            data-id={id}
                            className="content-edit"
                            value={content}
                            onChange={(e) => {
                                dispatch(editPrimary({
                                    id: id,
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
