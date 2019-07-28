import React, { Component } from "react"
import PropsType from "prop-types"
import { Row, Col } from "antd"
import Header from "./pages/header"
import NavLeft from "./pages/navigation"
import "./common/style/common.less"

export default class Admin extends Component {

    render() {
        return <Row className="container">
            <Col span={3} className="nav-left">
                <NavLeft />
            </Col>
            <Col span={21} className="main">
                <Header />
                <Row className="content">
                    {this.props.children}
                </Row>
            </Col>
        </Row>
    }
}
Admin.propsType = {
    children: PropsType.node
}