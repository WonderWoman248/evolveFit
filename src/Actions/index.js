export const del = (value) => {
    
    return {
        type: "del",
        payload:value,
    }
}
export const login = (value) => {
    return {
        type: "login",
        payload: value,
    }
}

export const adminData = (value) => {
    return {
        type: "adminData",
        payload:value,
        
    }
}
export const edit = (value) => {
    return {
        type: "edit",
        payload: value,
    }
}

export const addList = (value) => {
    return {
        type: 'addList',
        payload:value,
    }
}