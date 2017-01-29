export function createItem() {
    return {
        type: "CREATE_ITEM",
        payload: {
            item: "New Artifact"
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
export function useSkill(skill) {
    return { type: "USE_SKILL", payload: skill }
}