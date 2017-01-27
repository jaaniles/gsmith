import { combineReducers } from "redux"

import item from "./craftingReducer"
import game     from "./gameReducer"

export default combineReducers({
    item,
    game
})