import React, {Component} from 'react';

import EditTrigger from '../edit/EditTrigger';

export default class PrimarySection extends Component {
    render () {

        const dom = this.props.data.map((item, index) =>
            <div key={index} data-id={item.id} className="flex-item edit-wrap">
                <div className="iconfont">
                    <span className={item.icon + ' theme-ft-color'}>&nbsp;</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <EditTrigger onClick={() => {
                    console.log(item.id)
                    this.props.onClick(item.id);
                }} />
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

