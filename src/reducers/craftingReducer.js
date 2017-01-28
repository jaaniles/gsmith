const initialState = {}

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            const item = {
                name: action.payload.item,
                bonuses: [],
                progress: 0,
                level: 1
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
            item.bonuses = []

            return {...state, item}
        }
        case "ITEM_CREATE_BONUS": 
        {
            let item = state.item
            let min = item.progress

            const bonus = { pos: Math.floor(Math.random() * (99 - item.progress + 1) + item.progress) }

            item.bonuses = item.bonuses.concat(bonus)
            return {...state, item}
        }
        default:
            return state
    }
}