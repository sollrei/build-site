export const editSection = (data) => {
    return {
        type: 'EDIT_CONTENT',
        data: data
    }
};

export const closeEdit = () => {
    return {
        type: 'CLOSE_EDIT'
    }
};

export const editPrimary = (data) => {
    return {
        type: 'EDIT_PRIMARY',
        data: data
    }
};

export const editFull = (data) => {
    return {
        type: 'EDIT_FULL',
        data: data
    }
};

export const editLeftContent = (data) => {
    return {
        type: 'EDIT_LEFT_CONTENT',
        data: data
    }
};

export const editRightContent = (data) => {
    return {
        type: 'EDIT_RIGHT_CONTENT',
        data: data
    }
};

export const changeEditable = (data) => {
    return {
        type: data.type
    }
};