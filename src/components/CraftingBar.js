import React from "react"

import { newElKey } from "../utils/utils"
import { SKILLS_LIST } from "../constants/skills.js"

export default class CraftingBar extends React.Component {
    render() {
        const progress = this.props.progress
        if (this.refs.progress){
            this.refs.progress.style.width = `${progress}%`
        }

        return (
            <div className="crafting-bar">
                <div ref="progress" className="crafting-bar-progress">
                </div>
                {this.props.bonuses.map(bonus => {
                    if (progress > bonus.pos){
                        return <BonusIcon {...bonus}/>
                    }
                })}
            </div>
        )
    }
}

class BonusIcon extends React.Component {
    render(){
        const skill = getSkill(this.props.skill)
        const classIcon = `icon-${skill.icon}`
        return(
            <div style={{left: `${(this.props.pos - 5)}%`}} 
            className="bonusIcon">
                <i className={classIcon} key={this.props.pos - 5}/>
            </div>
        )
    }
}

function getSkill(skillName) {
    return SKILLS_LIST.find(skill => skill.name === skillName)
} 