export function createItem() {
    return {
        type: "CREATE_ITEM",
        payload: {
            item: "New item"
        }
    }
}

export function updateItemProgress() {
    return { type: "INC_ITEM_PROGRESS" }
}

