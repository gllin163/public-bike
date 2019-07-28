import React, { Component } from 'react'
import { Button, Card } from 'antd'
export default class Buttons extends Component {

    render() {
        return <Card title="按钮组件">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>
        </Card>
    }
}