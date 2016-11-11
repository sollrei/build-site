import React, {Component} from 'react';
import Editor from '../edit/Editor';

export default class Banner extends Component {
    render () {
        const {editable, data} = this.props;
        return (
            <div
                className="app-banner"
            >
                <div className="banner"
                     style={{
                         backgroundImage: "url('/image/banner.jpg')"
                     }}
                >
                    <div className="title">
                        <Editor
                            edit={editable}
                            editData={data.title}

                        />
                    </div>
                    <div className="desc">
                        <Editor
                            edit={editable}
                            editData={data.desc}

                        />
                    </div>
                </div>
            </div>

        )
    }
}