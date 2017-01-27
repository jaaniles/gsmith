const initialState = {}

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            const item = {
                name: action.payload.item,
                progress: 0,
                level: 0
            }

            return {...state, item}
        }
        case "INC_ITEM_PROGRESS":
        {
            let { progress } = state.item
            progress++
            const item = {...state.item, progress}
            return {...state, item}
        }
        case "LEVEL_UP_ITEM":
        {
            let { item } = state
            item.progress = 0
            item.level++

            console.log(item.level)

            return {...state, item}
        }
        default:
            return state
    }
}