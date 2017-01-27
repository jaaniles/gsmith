const initialState = {
    gameTime: 0
}

export default function(state = initialState, action){
    switch (action.type){
        case "INC_GAME_TIME":
        {
            const gameTime = state.gameTime + 1
            return {...state, gameTime: gameTime}
        }
        default:
            return state
    }
}