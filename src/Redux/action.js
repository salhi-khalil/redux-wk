import {INNCREMENT,DECREMENT,RESET,INPUTTEXT} from './action-type'

export const inncrementHandler = () => {
    return{
        type: INNCREMENT
    }
}
export const decrementHandler = () => {
    return{
        type: DECREMENT
    }
}
export const resetHandler = () => {
    return{
        type: RESET
    }
}

export const inputTextHandler = (data) => {
    
    return{
        type: INPUTTEXT,
        data:data
    }
}