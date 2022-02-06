import { types } from "../types/types"

export const setError = (msg) => {
    return {
        type: types.uiSetError,
        payload: msg
    }
}

export const removeError = () => {
    return {
        type: types.uiRemoveError
    }
}

export const startLogin = () => {
    return {
        type: types.uiStartLogin
    }
}

export const finishLogin = () => {
    return {
        type: types.uiFinishLogin
    }
}