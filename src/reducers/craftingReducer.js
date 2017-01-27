const initialState = {}

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            const item = {
                name: action.payload.item,
                progress: 0
            }

            return {...state, item}
        }
        default:
            return state
    }
}