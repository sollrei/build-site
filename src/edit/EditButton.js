import React from 'react';

const EditButton = ({text, click, className}) => {
    return (
        <div
            className={"edit-button " + className}
            onClick={click}
        >
            <span>{text}</span>
        </div>
    )
};

export default EditButton;