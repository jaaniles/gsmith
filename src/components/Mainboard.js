import React from "react"
import { connect } from "react-redux"

import CraftingBar from "./CraftingBar"
import { createItem } from "../actions/crafting"

export default class Mainboard extends React.Component {
    componentWillMount(){
        this.props.dispatch(createItem())
    }
    render() {
        const item = this.props.item
        if (!item){
            return <div><h4>Loading..</h4></div>
        }
        return (
            <div className="mainboard">
                <h4>{ item.name }</h4>
                <CraftingBar/>
            </div>
        )
    }
}