import { BUY_ICECREAM } from "./iceCreamActionTypes";

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {...state, numOfIceCreams: state.numOfIceCreams - 1}
        default:
            return state;
    }
};

export default iceCreamReducer;