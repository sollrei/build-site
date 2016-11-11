import React, {Component} from 'react';
import { connect } from 'react-redux';

class Editor extends Component {

    constructor (props) {
        super(props);
        this.emitChange = this.emitChange.bind(this);
    }

    shouldComponentUpdate () {
        return false;
    }

    render () {

        const {editData, editable, ele} = this.props;

        this.lastHtml = editData;

        const content = {__html: editData};

        if (editable) {
            return <div
                className="editor-wrapper"
                contentEditable={true}
                dangerouslySetInnerHTML={content}
                onBlur={this.emitChange}
                ref="div"
            />
        }

        if (ele) {
            return React.createElement(
                ele,
                {dangerouslySetInnerHTML: content}
            );
        }

        return (
            <div
                dangerouslySetInnerHTML={content}
            />
        )
    }

    emitChange () {
        const html = this.refs.div.innerHTML;
        const {editEvent} = this.props;

        if (editEvent && html !== this.lastHtml) {
            editEvent(html);
        }

        // this.lastHtml = html;
    }
}

const mapStateToProps = (state) => {
    return {
        editable: state.editable
    };
};

const ConnectedEditor = connect(mapStateToProps)(Editor);

export default ConnectedEditor;

