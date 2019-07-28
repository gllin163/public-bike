import React, { Component } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Admin from "./Admin"
import Login from "./pages/login"
import Buttons from "./pages/ui/buttons"

export default class IRouter extends Component {

    render() {
        return <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/admin" render={() => <Admin >
                    <Route path="/admin/ui/buttons" component={Buttons} />
                    <Route path="/admin/ui/buttons" component={Buttons} />
                </Admin>} />
            </Switch>
        </Router>
    }
}