import React, {Component} from 'react';
import EditTrigger from '../edit/EditTrigger';

export default class PrimarySection extends Component {

    // shouldComponentUpdate () {
    //     return false;
    // }

    render () {
        console.log('render: Primary');

        const {data, editable, onClick} = this.props;
        const dom = data.map((item) =>
            <div
                key={item.id}
                data-id={item.id}
                className={editable ? "flex-item edit-wrap" : "flex-item"}
            >
                <div className="iconfont">
                    <span className={item.icon + ' theme-ft-color'} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                { editable && <EditTrigger onClick={onClick.bind(null, item.id)} /> }
            </div>
        );

        return (
            <section className="app-primary">
                <div className="layout">
                    <div className="app-flex">
                        {dom}
                    </div>
                </div>
            </section>
        )
    }
};