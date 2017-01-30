export function createItem() {
    return {
        type: "CREATE_ITEM",
        payload: {
            item: "New Artifact"
        }
    }
}
export function useSkill(skill) {
    return (dispatch, getState) => {
        const { game, item, skills } = getState()
        dispatch(removeSkill(skill))
        switch (skill.name){
            case "Timestop": 
            {   
                const pauseLength = 3 // has to be calculated somehow
                game.pause = true
                setTimeout(() => {
                    game.pause = false
                }, pauseLength * 1000)
                break;
            }
            case "Sacrifice":
            {

            }
        }
    }
    //return { type: "USE_SKILL", payload: skill }
}

export function updateItemProgress() {
    return { type: "INC_ITEM_PROGRESS" }
}
export function itemLevelUp() {
    return { type: "LEVEL_UP_ITEM" }
}
export function itemCreateBonus(skill) {
    return { type: "ITEM_CREATE_BONUS", payload: skill }
}
export function removeSkill(skill){
    return {type: "REMOVE_SKILL", payload: skill}
}
