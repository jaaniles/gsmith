import { updateItemProgress, itemLevelUp, itemCreateBonus } from "./crafting"
import { updateGameTime } from "./game"
import { randomNumber } from "../utils/utils"

export function tick() {
    return (dispatch, getState) => {
        const { game, item } = getState()
        if (game.pause) { return }
        if (item.item.progress >= 100){ //  Progress 100%, level up and progress -> 0%
            dispatch(itemLevelUp())
        } 
        // Every tenth progress there is a chance to spawn a bonus
        else if (item.item.progress % 10 == 0 && randomNumber(0, 10) > 4){
            if (Object.keys(item.item.attributes).length === 0){ return }
            // -- Which skill does the bonus buff? ---
            const skill = getSkillForBonus(item.item.attributes)
            dispatch(itemCreateBonus(skill))
        }

        dispatch(updateItemProgress())
        dispatch(updateGameTime())
    }
}

// Gets a "weighted random" skill 
function getSkillForBonus(attributes) {
    const totalPoints = Object.values(attributes).reduce((total, attr) => {
        return total + attr
    }, 0)
    var rnd = randomNumber(0, totalPoints)
    const attrList = Object.keys(attributes).map(key => {
        return {skill: key, value: attributes[key]}
    })
    for (let i = 0; i < attrList.length; i++){
        if (rnd < attrList[i].value){
            return attrList[i]
        }
        rnd -= attrList[i].value
    }
    return attrList[attrList.length - 1]
}