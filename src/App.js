import React, {Component} from 'react';
import { connect } from 'react-redux';

/**
 * Page component
 * */

import Menu from './edit/Menu';
import EditContent from './edit/EditContent';
import EditButton from './edit/EditButton';
import {changeEditable} from './store/action';


import './style.css';
const interact = window.interact;
const doc = document;

class App extends Component {

    savePageData () {
        const data = this.props.route.getState();
        window.localStorage.setItem('siteData', JSON.stringify(data))
    }

    createSVG (ev, el, color, ot, ol, callback) {
        const dummy = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const g = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
        const circle = doc.createElementNS("http://www.w3.org/2000/svg", "circle");

        dummy.setAttributeNS(null, 'version', '1.1');
        dummy.setAttributeNS(null, 'class', 'paint');
        g.setAttributeNS(null, 'transform',
            'translate(' + Number(ev.clientX - ol) + ', ' + Number(ev.pageY - ot) + ')');
        circle.setAttributeNS(null, 'cx', 0);
        circle.setAttributeNS(null, 'cy', 0);
        circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(el.offsetWidth,2) + Math.pow(el.offsetHeight,2)));
        circle.setAttributeNS(null, 'fill', color);

        dummy.appendChild(g);
        g.appendChild(circle);
        el.appendChild(dummy);

        callback(dummy);
    }

    componentDidMount () {
        console.log('app component did mount');
        const _ = this;

        interact('.dropzone').dropzone({
            accept: '.color-span',
            overlap: 0.75,

            ondropactivate: function (event) {
                event.target.classList.add('drop-active');
            },

            ondragenter: function (event) {
                console.log('event: drag enter');

                var draggableElement = event.relatedTarget,
                    dropzoneElement = event.target;

                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
            },
            ondragleave: function (event) {
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
            },
            ondrop: function (event) {
                const relatedNode = event.relatedTarget, // 被拖拽的span
                    targetNode = event.target,  // 拖拽目标区域
                    color = relatedNode.style.color;

                if (targetNode.className.indexOf("drop-bg") > -1 ) {
                    _.createSVG(event.dragEvent,
                        targetNode,
                        color,
                        targetNode.offsetTop, targetNode.offsetLeft,
                        (svg) => {
                        setTimeout(() => {
                            targetNode.classList.add('paint-active');
                            setTimeout(() => {
                                targetNode.style.background = color;
                                targetNode.classList.remove('paint-active');
                                svg.remove();
                            }, 800);
                        }, 25);
                    });

                }

                if (targetNode.className.indexOf("drop-txt") > -1 ) {
                    targetNode.style.color = color;
                }

            },
            ondropdeactivate: function (event) {
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            }
        });
    }

    render() {

        const {dispatch, state} = this.props;

        const editContent = state.get('editContent');

        return (
            <div className="app-wrap">
                <EditButton
                    click={() => {
                        dispatch(changeEditable({
                            type: 'NOT_EDITABLE'
                        }));
                        this.savePageData();
                        location.reload();
                    }}
                    text='保存'
                    className="button-save"
                />
                <EditButton
                    click={() => {
                        dispatch(changeEditable({
                            type: 'EDITABLE'
                        }));
                        this.savePageData();
                        location.reload();
                    }}
                    text='编辑'
                    className="button-edit"
                />
                {this.props.children}
                <Menu />
                <EditContent dispatch={dispatch} editContent={editContent} state={state} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: state
    };
};

const ConnectedIndex = connect(mapStateToProps)(App);

export default ConnectedIndex;
