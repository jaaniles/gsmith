import React, { createClass } from "react"
import { render } from "react-dom"

import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux"

import Mainboard from "./containers/mainboard"
import { tick }  from "./actions/tick"

import store from "./store"
const App = createClass({
    render: () => {
        return( 
            <div>
                <Mainboard />
            </div>
        )
    }
})

/*
store.subscribe(() => {
    console.log("Store changed!", store.getState())
})
*/

render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById("app-root"))

// GameLoop ticker
setInterval(() => {
    store.dispatch(tick())
}, 500)