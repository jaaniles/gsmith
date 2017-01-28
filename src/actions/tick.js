import { updateItemProgress, itemLevelUp, itemCreateBonus } from "./crafting"
import { updateGameTime } from "./game"
import { randomNumber } from "../utils/utils"

export function tick() {
    return (dispatch, getState) => {
        const { game, item } = getState()

        if (item.item.progress >= 100){
            dispatch(itemLevelUp())
        } else if (item.item.progress % 10 == 0 && randomNumber(0, 10) > 8){
            dispatch(itemCreateBonus())
        }

        dispatch(updateItemProgress())
        dispatch(updateGameTime())
    }
}