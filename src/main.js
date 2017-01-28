import React, { createClass } from "react"
import { render } from "react-dom"

import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux"

import Mainboard from "./containers/mainboard"
import Craftingboard from "./containers/craftingboard"

import { tick }  from "./actions/tick"
import store from "./store"
const App = createClass({
    render: () => {
        return( 
            <div>
                <Mainboard />
                <Craftingboard />
            </div>
        )
    }
})

render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById("app-root"))

// GameLoop ticker
setInterval(() => {
    store.dispatch(tick())
}, 100)