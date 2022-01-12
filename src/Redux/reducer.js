import {INNCREMENT,DECREMENT,RESET,INPUTTEXT} from './action-type'
const initialState={
    count:0,
    data:""

}

export const counterReducer = (state=initialState,action) => {
    switch (action.type) {
        case INNCREMENT: return {
            ...state,
            count: state.count+1
        }
        case DECREMENT: return {
            ...state,
            count: state.count-1
        }
        case RESET: return {
            ...state,
            count: 0,
            data:""
        }
        case INPUTTEXT: return {
            
            ...state,
            data: action.data
        }
        default: return state
    }
}