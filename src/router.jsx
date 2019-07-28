import React, { Component } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Admin from "./Admin"
import Login from "./pages/login"
import Buttons from "./pages/ui/buttons"
import Content from "./pages/content"
import Modal from "./pages/ui/modal"
import NotFound from "./pages/nopage"
export default class IRouter extends Component {

    render() {
        return <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" render={() =>
                    <Admin>
                        <Switch>
                            <Route exact path="/home" component={Content} />
                            <Route exact path="/ui/buttons" component={Buttons} />
                            <Route exact path="/ui/modals" component={Modal} />
                            <Route component={NotFound} />
                        </Switch>
                    </Admin>}
                />
            </Switch>
        </Router>
    }
}