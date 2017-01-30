import { connect } from "react-redux"

import Craftingboard from "../components/Craftingboard"

function mapStateToProps(state) {
    const skills = state.skills.skills
    const item = state.item.item
    return {
        skills, item
    }
}

export default connect(mapStateToProps)(Craftingboard)
