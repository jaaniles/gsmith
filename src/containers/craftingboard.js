import { connect } from "react-redux"

import Craftingboard from "../components/Craftingboard"

function mapStateToProps(state) {
    const { skills } = state.item
    return {
        skills
    }
}

export default connect(mapStateToProps)(Craftingboard)
