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

class App extends Component {

    savePageData () {
        const data = this.props.route.getState();
        window.localStorage.setItem('siteData', JSON.stringify(data))
    }

    render() {

        const {dispatch} = this.props;

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
                <EditContent {...this.props} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
};

const ConnectedIndex = connect(mapStateToProps)(App);

export default ConnectedIndex;
