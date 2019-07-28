import React, { Component } from 'react'
import { Button, Card, Modal } from 'antd'
export default class Buttons extends Component {
    state = {
        showModal: false
    }

    handleShowModal = () => {
        this.setState({
            showModal: true
        })
    }

    handleCancel = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return <div>
            <Card title="按钮组件">
                <Button type="primary" onClick={this.handleShowModal}>Primary</Button>
                <Button>Default</Button>
            </Card>
            <Modal
                title="弹窗"
                visible={this.state.showModal}
                onOk={this.handleCancel}
                onCancel={this.handleCancel}
            >
                <p>弹窗的内容1</p>
                <p>弹窗的内容2</p>
                <p>弹窗的内容3</p>
            </Modal>
        </div>
    }
}