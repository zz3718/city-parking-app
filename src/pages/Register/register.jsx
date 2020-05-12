import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class Register extends React.Component{
    render () {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >注册</NavBar>
            </div>
        )
    }
}