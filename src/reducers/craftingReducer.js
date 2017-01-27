const initialState = {
    item: null
}

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            const item = {
                name: action.payload.item,
                score: 0
            }

            return {...state, item: item}
        }
        default:
            return state
    }
}