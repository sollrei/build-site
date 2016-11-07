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
