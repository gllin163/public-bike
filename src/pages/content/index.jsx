import React, { Component } from "react"
import Header from "../header"
import "./index.less"

export default class Content extends Component {

    render() {
        return <div className="manage-content-content">
            这是内容部分
            <Header info="121" />
        </div>
    }
}