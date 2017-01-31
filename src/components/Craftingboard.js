import React from "react"
import ReactTooltip from 'react-tooltip'

import { useSkill } from "../actions/crafting"
import CraftingBar from "./CraftingBar"

export default class Craftingboard extends React.Component {
    useSkill(skill){
        this.props.dispatch(useSkill(skill))
    }
    render() {
        const skills = this.props.skills
        const item = this.props.item
        return (
            <div className="crafting-board">
                <CraftingBar {...item}/>
            {
                skills.map(skill => {
                    return (
                        <button
                        className="crafting-button"
                        onClick={() => this.useSkill(skill)}>
                        <SkillIcon {...skill} />
                        </button>
                    )
                })
            }
            </div>
        )
    }
}
class SkillIcon extends React.Component {
    render() {
        const skill = this.props
        const src = `/img/${skill.icon}.png`
        return (
            <div className="skillDiv">
                <ReactTooltip />
                <img className="skillIcon" src={src}/><br/>
                {skill.name}
                <br/>
                <i className="icon-list"
                style={{
                    fontSize: "12px"
                }}
                data-tip={`${skill.desc} <hr> ${skill.mechanic}`}
                data-html="true"/>
            </div>
        )
    }
}
