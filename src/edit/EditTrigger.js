import React, {Component} from 'react';

export default class EditTrigger extends Component {
    render () {
        return (
            <div className="edit-trigger">
                <div className="button"
                     {...this.props}
                >编辑</div>
            </div>
        )
    }
}