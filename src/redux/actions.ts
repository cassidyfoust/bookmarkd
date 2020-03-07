export const setUserState = (payload: any) => {
    return {type: 'SET_USER_STATE', payload}
}

export const fetchBooks = (payload: any) => {
    return {type: 'SET_BOOKS', payload}
}