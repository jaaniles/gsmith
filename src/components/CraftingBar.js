import React from "react"

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
                        return <BonusIcon bonus={bonus.pos}/>
                    }
                })}
            </div>
        )
    }
}

class BonusIcon extends React.Component {
    render(){

        return(
            <div style={{
                left: `${this.props.bonus}%`
            }} 
            className="bonusIcon"
            key={Math.floor(Date.now() / 1000)}>
            []
            </div>
        )
    }
}