import React, { Component } from "react"
// import PropTypes from "prop-types"
import "./index.less"

export default class Header extends Component {

    render() {
        return <div className="manage-header-content">
            <div className="header-top">
                <span>{"冰山一角"}</span>
                <a href="/">退出</a>
            </div>
            <div className="bread-crumbs">
                <span className="dir-content">{"首页"}</span>
                <span className="weather">{"天气90"}</span>
            </div>
        </div>
    }
}
