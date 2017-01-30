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
            for (let i = 0; i < PLAYER_SKILL_CAP; i++){
                skills.push(pickRandomSkill())
            }
            skills.forEach(skill => {
                console.log(skill)
            })
            /*
            while (skills.length < PLAYER_SKILL_CAP){
                console.log(i)
                let i = 0;
                skills.push(pickRandomSkill())
                i++
            }
            */
            return {...state, skills}
        }
        case "REMOVE_SKILL":
        {
            const usedSkillKey = action.payload.key
            let skills = state.skills.filter(skill => skill.key != usedSkillKey)
            skills.push(pickRandomSkill())
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