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
        
        // swap used skill for a new one
        dispatch(swapSkill(skill))

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
export function swapSkill(skill){
    return {type: "SWAP_SKILL", payload: skill}
}
