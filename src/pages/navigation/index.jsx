import React, { Component } from "react"
import { Menu } from "antd"
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
            {
                MenuConfig && MenuConfig.map((pItem, i) => {
                    const { title, key, children } = pItem || {}
                    return <Menu key={i + "itemP"} theme="dark" mode="vertical">
                        <Menu.SubMenu key={key + "menu"} title={<span>{title}</span>}>
                            {
                                children && children.map((item, k) => {
                                    return <Menu.Item key={item.key + "child-menu"}>{item.title}</Menu.Item>
                                })
                            }
                        </Menu.SubMenu>
                    </Menu>
                })

            }

        </div >
    }
}