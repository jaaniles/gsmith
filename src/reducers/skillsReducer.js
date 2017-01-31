import { SKILLS_LIST } from "../constants/skills.js"
import {  newKey } from "../utils/utils"

const initialState = {
    skills: []
}
const PLAYER_SKILL_CAP = 4

export default function(state = initialState, action){
    switch (action.type){
        case "CREATE_ITEM":
        {
            let skills = []
            while (skills.length < PLAYER_SKILL_CAP){
                skills.push(pickRandomSkill())
            }
            return {...state, skills}
        }
        case "SWAP_SKILL":
        {
            console.log("SwapskilL!")
            const usedSkillKey = action.payload.key
            const usedSkill = state.skills.find(skill => skill.key == usedSkillKey)
            let skills = state.skills
            skills[skills.indexOf(usedSkill)] = pickRandomSkill()
            console.log("Done swapping, ",skills)
            return {...state, skills}
        }
        default:
            return state
    }
}
function pickRandomSkill() {
    let randomSkill = SKILLS_LIST[Math.floor(Math.random() * SKILLS_LIST.length)]
    return {...randomSkill, key: newKey()}
}