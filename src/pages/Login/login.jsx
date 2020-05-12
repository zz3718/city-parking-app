import React from 'react'
import './login.scss'
import { NavBar, Icon, List, Button } from 'antd-mobile';
export default class Login extends React.Component {
	login = () => {
		console.log('点击登录')
	}
	register = () => {
		console.log('点击新用户注册')
	}
	render () {
		return (
			<div className="login-container">
				<List>
						<NavBar
						mode="light"
						icon={<Icon type="left" />}
						onLeftClick={() => { this.props.history.go(-1) }}
						rightContent={<span onClick={ this.register }>新用户注册</span>}
						>登录</NavBar>
						<div className="login-content">
							<div className="login-title">城市停车登录</div>
							<div>
								<form action="">
									<div className="form-item">
										<label htmlFor="">手机号：</label>
										<div className="form-input">
											<input type="text"/>
										</div>
									</div>
									<div className="form-item">
										<label htmlFor="">密码：</label>
										<div className="form-input">
											<input type="text"/>
										</div>
									</div>
								</form>
							</div>
							<div className="login-bottom">
								<span className="login-bottom-left">验证码登录</span>
								<span className="login-bottom-right">忘记密码</span>
							</div>
							<div className="login-btn">
								<Button type="primary" onClick={ this.login }>登录</Button>
							</div>
						</div>
				</List>
			</div>
		)
	}
}