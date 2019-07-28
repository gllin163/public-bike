import React, { Component } from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import iconImg from "../../common/recourse/end_point.png"
import MenuConfig from "../../config/menuConfig"
import "./index.less"

export default class NavLeft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuConfig: []
        }
    }

    componentDidMount() {
        this.setState({ MenuConfig })
    }

    render() {
        return <div className="manage-nav-left-content">
            <div className="logo">
                <img src={iconImg} alt="" />
                <h1>共享单车系统</h1>
            </div>
            {MenuConfig && MenuConfig.map((pItem, i) => {
                const { title, key, children } = pItem || {}
                return <Link to={key}>
                    <Menu key={i + "itemP"} theme="dark" mode="vertical">
                        <Menu.SubMenu key={key + "menu"} title={<span>{title}</span>}>
                            {
                                children && children.map((item, k) => {
                                    return <Menu.Item key={item.key + "child-menu"}>
                                        <Link to={item.key}> {item.title}</Link>
                                    </Menu.Item>
                                })
                            }
                        </Menu.SubMenu>
                    </Menu>
                </Link>
            })}
        </div >
    }
}