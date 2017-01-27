import { updateItemProgress, itemLevelUp } from "./crafting"
import { updateGameTime } from "./game"

export function tick() {
    return (dispatch, getState) => {
        const { game, item } = getState()

        if (item.item.progress >= 100){
            dispatch(itemLevelUp())
        }

        dispatch(updateItemProgress())
        dispatch(updateGameTime())
    }
}