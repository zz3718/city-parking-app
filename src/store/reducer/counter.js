import * as actions from '../constans/index'
const counter = (state = 1, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return state + action.num
            // throw new Error('err reducer')
        case actions.DECREMENT:
            return state - action.num
        default:
            return state
    }
}
export default counter