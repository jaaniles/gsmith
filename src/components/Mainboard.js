import React from "react"
import { connect } from "react-redux"

import CraftingBar from "./CraftingBar"
import { createItem } from "../actions/crafting"

export default class Mainboard extends React.Component {
    componentWillMount(){
        this.props.dispatch(createItem())
    }
    render() {
        if (!this.props.item){
            return <div></div>
        }
        const item = this.props.item.name
        return (
            <div className="mainboard">
                <h4>{ item }</h4>
                <CraftingBar/>
            </div>
        )
    }
}