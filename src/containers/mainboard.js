import { connect } from "react-redux"

import mainboard from "../components/Mainboard"

function mapStateToProps(state) {
    const { item } = state

    return {
        item
    }
}

export default connect(mapStateToProps)(mainboard)
