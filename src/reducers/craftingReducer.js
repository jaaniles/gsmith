import { randomNumber } from "../utils/utils"
import { SKILLS_LIST } from "../constants/skills.js"

const initialState = {
    skills: SKILLS_LIST
}

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            const item = {
                name: action.payload.item,
                bonuses: [],
                attributes: {},
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
            const bonusSkill = action.payload.skill
            const bonus = { 
                pos: randomNumber(item.progress, 100), // Position in which this bonus shows at
                skill: bonusSkill
            }

            item.bonuses = item.bonuses.concat(bonus)
            return {...state, item}
        }
        case "USE_SKILL": 
        {
            const skill = action.payload
            let item = state.item
            item.attributes[skill] ? item.attributes[skill]++ : item.attributes[skill] = 1
            return {...state, item} 
        }
        default:
            return state
    }
}