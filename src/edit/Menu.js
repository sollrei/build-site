import React, {Component} from 'react';

const interact = window.interact;
const doc = document;

export default class Menu extends Component {

    constructor (props) {
        super(props);

        this.state = {
            extend: false,
            theme: 0
        }
    }

    // changeSiteTheme (color) {
    //     let eleStyle = doc.getElementById('theme-style');
    //
    //     if (!eleStyle) {
    //         const sty = doc.createElement('style');
    //         sty.id = 'theme-style';
    //         eleStyle = doc.body.appendChild(sty);
    //     }
    //
    //     eleStyle.innerHTML = `.theme-ft-color { color: ${color}; }
    //         .theme-bg-color { background-color: ${color}; }
    //         .app-column2 p:after { background-color: ${color}; }
    //         .app-nav .active { background: ${color}; }
    //         .owl-theme .owl-controls .owl-page.active span,
    //         .owl-theme .owl-controls.clickable .owl-page:hover span{
    //             background-color: ${color}!important;
    //         }
    //         .app-contact .contact .iconfont {color: ${color}}
    //         .edit-trigger .icon-rotate .icon-set {color: ${color}}`;
    //
    // }

    componentDidMount () {
        console.log('menu component did mount');

        this.interactable = interact('.color-span');
        this.interactable
            .draggable({
                onmove: function (event) {
                    const target = event.target;
                    target.style.left = (parseInt(target.style.left, 10)||0) + event.dx + 'px';
                    target.style.top  = (parseInt(target.style.top, 10 )||0) + event.dy + 'px';
                },
                onend: function (event) {
                    const target = event.target;
                    target.style.left = 0;
                    target.style.top = 0;
                }
            }).resizable(true);

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
                    <p className="title">拖拽配色</p>
                    <ul id="color-ul" className="color" onClick={(e) => {
                        if (e.nativeEvent.target.nodeName === 'LI') {
                            //const _index = Number(e.nativeEvent.target.getAttribute('data-index'));
                            //this.setState({
                                //theme: _index
                            //});

                            //this.changeSiteTheme(e.nativeEvent.target.getAttribute('data-color'));
                        }

                    }}>
                        {
                            ['#b4de50', '#1da9c2','#ff8a00', '#e54e53', '#fff'].map((item, index) => {
                                let classname = '';
                                if (index === this.state.theme) {
                                    classname = 'current';
                                }
                                return <li
                                    className={classname + ' iconfont'}
                                    data-color={item}
                                    data-index={index}
                                    key={index}
                                    style={{background: item, position: 'relative'}}>
                                    <span
                                        className="color-span icon-water"
                                        style={{color: item}}
                                    />
                                </li>
                            })
                        }

                    </ul>
                </nav>
            </div>
        )
    }
}