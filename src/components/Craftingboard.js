import React from "react"

export default class Craftingboard extends React.Component {
    render() {
        const skills = this.props.skills
        return (
            <div className="crafting-board">
            {
                skills.map(skill => {
                    return <CraftingButton {...skill}/>
                })
            }
            </div>
        )
    }
}

class CraftingButton extends React.Component {
    render(){
        const skill = this.props
        const classList = `icon-${skill.icon} icon`
        return(
            <button className="crafting-button">
                <i className={classList}/><span>{skill.name}</span>
            </button>
        )
    }
}