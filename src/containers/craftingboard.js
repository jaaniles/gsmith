import { connect } from "react-redux"

import Craftingboard from "../components/Craftingboard"

function mapStateToProps(state) {
    const { skills, item } = state.item
    return {
        skills, item
    }
}

export default connect(mapStateToProps)(Craftingboard)
