import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class Login extends React.Component {
    render () {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >登录</NavBar>
                <div>登录</div>
            </div>
        )
    }
}