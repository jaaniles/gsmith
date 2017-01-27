import React from "react"

export default class CraftingBar extends React.Component {
    render() {
        return (
            <div className="crafting-bar">
                <div ref="progress" className="crafting-bar-progress"></div>
            </div>
        )
    }
}