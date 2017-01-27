import { updateItemProgress } from "./crafting"
import { updateGameTime } from "./game"

export function tick() {
    return (dispatch, getState) => {
        const { game, item } = getState()

        dispatch(updateItemProgress())
        dispatch(updateGameTime())
    }
}