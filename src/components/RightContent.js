import React from 'react';

const RightContent = () => {
    return (
        <section className="app-right-content">
            <div className="layout">
                <div className="right">
                    <h3 className="title">What Are You Waiting For? <br/> StartIt Today!</h3>
                    <p className="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sediam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                    <div className="app-flex">
                        <div className="flex-item">
                            <p>Make a difference</p>
                            <p>Unmatched power</p>
                            <p>Retina ready</p>
                        </div>
                        <div className="flex-item">
                            <p>Satisfied clients</p>
                            <p>Control the design</p>
                            <p>Imagine and create</p>
                        </div>
                    </div>
                </div>
                <div className="left app-image">
                    <img width="551"
                         height="500"
                         src="http://startit.select-themes.com/wp-content/uploads/2015/10/image-1-home-main.jpg"
                         className="image"
                         alt="a"
                         srcSet="http://startit.select-themes.com/wp-content/uploads/2015/10/image-1-home-main.jpg 525w, http://startit.select-themes.com/wp-content/uploads/2015/10/image-1-home-main-300x273.jpg 300w"
                         sizes="(max-width: 551px) 100vw, 551px" />
                </div>
            </div>
        </section>
    )
};

export default RightContent;