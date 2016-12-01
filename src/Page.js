import React, {Component} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Contact from './components/Contact';

import { connect } from 'react-redux';

class Page extends Component {
    render () {
        const {editable} = this.props;

        return (
            <div className="app-page">
                <Header />
                <Banner
                    data={{
                        title: '回顾过去30年，未来70年，我们继续努力拼搏',
                        desc: '我们真诚的欢迎您通过热线电话等即时通讯方式与我们联系，无论是项目咨询还是意见反馈，我们都会以最快的方式服务于您。同时，我们也热诚欢迎您关注我们的微信、微博等社交平台，随时随地了解世邦工业动态及优惠政策等讯息…'
                    }}
                    editable={editable}
                />
                <div className="app-contact" style={{ background: '#fff', position: 'relative', zIndex: 2}}>
                    <Contact
                        data={{
                            title: '您可以通过以下方式联系到我们',
                            content: '如果您对我公司及我们的产品感兴趣，欢迎到我公司或者我公司当地办事处来拜访，您也可以通过在线咨询，需求表单提交，发送电子邮件，拨打咨询电话等方式与我们取得沟通!我们的员工将竭诚为您提供产品信息和应用知识，以及世邦工业贴心的服务。',
                            phone: '400-696-1899',
                            email: 'info@shibang.cn'
                        }}
                         editable={editable}
                    />
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editable: state.get('editable')
    };
};

const ConnectedIndex = connect(mapStateToProps)(Page);

export default ConnectedIndex;