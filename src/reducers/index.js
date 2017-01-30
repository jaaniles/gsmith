import { combineReducers } from "redux"

import item from "./craftingReducer"
import game     from "./gameReducer"
import skills   from "./skillsReducer"

export default combineReducers({
    item,
    game,
    skills
})