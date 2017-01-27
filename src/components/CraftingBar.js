import React from "react"

export default class CraftingBar extends React.Component {
    render() {
        const progress = this.props.progress
        if (this.refs.progress){
            this.refs.progress.style.width = `${progress}%`
        }
        return (
            <div className="crafting-bar">
                <div ref="progress" className="crafting-bar-progress"></div>
            </div>
        )
    }
}