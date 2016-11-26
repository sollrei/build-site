import React, {Component} from 'react';
import EditTrigger from '../edit/EditTrigger';
import Immutable from 'immutable';

export default class PrimarySection extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return !Immutable.is(nextProps.data, this.props.data);
    }

    componentDidMount () {
        console.log('primary did mount');
    }

    render () {
        console.log('render: Primary');

        const {data,  onClick} = this.props;
        const editable = true;
        let dom = data.map(item => {
            const id = item.get('id'),
                icon = item.get('icon'),
                title = item.get('title'),
                content = item.get('content');
            return (
                <div
                    key={id}
                    className={editable ? "flex-item edit-wrap" : "flex-item"}
                >
                    <div className="iconfont">
                        <span className={icon + ' theme-ft-color'} />
                    </div>
                    <h3 className="dropzone drop-txt">{title}</h3>
                    <p className="dropzone drop-txt">{content}</p>
                    { editable && <EditTrigger onClick={onClick.bind(null, id)} /> }
                </div>
            )
        });

        console.log(dom)

        return (
            <div className="dropzone drop-bg"
                onDrop={(e) => {
                    console.log(e.nativeEvent);
                    console.log('mi drag onDrop')
                }}
                 onDragOver={(ev) => {
                     console.log(ev.nativeEvent);
                     ev.preventDefault();

                     return true;
                 }}
                 onDragLeave={() => {
                     console.log('drag leave')
                 }}
            >
                <section className="app-primary drop-content">
                    <div className="layout">
                        <div className="app-flex">
                            {dom}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};