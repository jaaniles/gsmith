import React from "react"

import { useSkill } from "../actions/crafting"

export default class Craftingboard extends React.Component {
    useSkill(skill){
        this.props.dispatch(useSkill(skill))
    }
    render() {
        const skills = this.props.skills
        return (
            <div className="crafting-board">
            {
                skills.map(skill => {
                    const classList = `icon-${skill.icon} icon`
                    return (
                        <button className="crafting-button" onClick={() => this.useSkill(skill.name)}>
                            <i className={classList}/><span>{skill.name}</span>
                        </button>
                    )
                })
            }
            </div>
        )
    }
}
