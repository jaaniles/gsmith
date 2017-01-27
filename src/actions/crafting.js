export function createItem() {
    return {
        type: "CREATE_ITEM",
        payload: {
            item: "New item"
        }
    }
}