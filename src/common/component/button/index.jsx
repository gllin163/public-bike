import React, { Component } from "react"
import PropTypes from "prop-types"
import "./index.less"

export default class Button extends Component {

    handleClick = (e, onClick) => {
        e.stopPropagation()
        e.preventDefault()
        onClick && onClick()
    }
    render() {
        const { className, disabled, children, onClick } = this.props
        return <a href="javascript:" onClick={(e) => this.handleClick(e, onClick)} className={"btn-content " + (className ? className : " ")
            + (disabled ? " disable" : "")}>
            {children}
        </a >
    }
}


Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]),
    onClick: PropTypes.func
}