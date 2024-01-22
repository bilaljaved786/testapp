import { Add, Minus } from "./constants";

// initial State
const initialState = {
    numberOfBooks: 15
}

const toggle_reducer = function (state = initialState, action) {
    switch (action.type) {
        case Add:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks + 1
            }
            case Minus:
                return {
                    ...state,
                    numberOfBooks: state.numberOfBooks - 1
                }
        default: return state;
    }
}

export { toggle_reducer };
