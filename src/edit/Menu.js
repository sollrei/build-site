import React, {Component} from 'react';

let doc = document;

export default class Menu extends Component {

    constructor (props) {
        super(props);

        this.state = {
            extend: false,
            theme: 0
        }
    }

    changeSiteTheme (color) {
        let eleStyle = doc.getElementById('theme-style');

        if (!eleStyle) {
            const sty = doc.createElement('style');
            sty.id = 'theme-style';
            eleStyle = doc.body.appendChild(sty);
        }

        eleStyle.innerHTML = `.theme-ft-color { color: ${color}; }
            .theme-bg-color { background-color: ${color}; }
            .app-column2 p:after { background-color: ${color}; }
            .app-nav .active { background: ${color}; }
            .owl-theme .owl-controls .owl-page.active span,
            .owl-theme .owl-controls.clickable .owl-page:hover span{
                background-color: ${color}!important;
            }
            .app-contact .contact .iconfont {color: ${color}}
            .edit-trigger .icon-rotate .icon-set {color: ${color}}`;
        
    }

    render () {

        const extendClass = this.state.extend ? 'app-edit app-extend': 'app-edit';

        return (
            <div className={extendClass}>
                <div className="edit-trigger">
                    <div className="iconfont"
                       onClick={() => {
                           this.setState({
                               extend: !this.state.extend
                           });
                       }}
                    >
                        <div className="icon-rotate">
                            <span className="icon-set"></span>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <p className="title">主题配色</p>
                    <ul className="color" onClick={(e) => {
                        if (e.nativeEvent.target.nodeName === 'LI') {
                            const _index = Number(e.nativeEvent.target.getAttribute('data-index'));
                            this.setState({
                                theme: _index
                            });

                            this.changeSiteTheme(e.nativeEvent.target.getAttribute('data-color'));
                        }

                    }}>
                        {
                            ['#b4de50', '#1da9c2','#ff8a00', '#e54e53'].map((item, index) => {
                                let classname = '';
                                if (index === this.state.theme) {
                                    classname = 'current';
                                }
                                return <li className={classname} data-color={item} data-index={index} key={index} style={{background: item}}>&nbsp;</li>
                            })
                        }

                    </ul>
                </nav>
            </div>
        )
    }
}