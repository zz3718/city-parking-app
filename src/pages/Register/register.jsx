import React from 'react'
import './register.scss'
import { NavBar, Icon, List, Button } from 'antd-mobile';
import {
  withRouter
} from "react-router-dom";
class Register extends React.Component {
	clickRegister = () => {
		console.log('点击注册')
	}
	render () {
		return (
			<div className="register-container">
				<List>
					<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => { this.props.history.go(-1) }}
					>注册</NavBar>
					<div className="register-content">
							<div className="register-title">城市停车注册</div>
							<div>
									<form action="">
											<div className="form-item">
													<label htmlFor="">手机号：</label>
													<div className="form-input">
															<input type="text"/>
													</div>
											</div>
											<div className="form-item">
													<label htmlFor="">用户名：</label>
													<div className="form-input">
															<input type="text"/>
													</div>
											</div>
											<div className="form-item">
													<label htmlFor="">邮箱：</label>
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
							<div className="register-btn">
									<Button type="primary" onClick={ this.clickRegister }>注册</Button>
							</div>
					</div>
				</List>
			</div>
		)
	}
}
export default withRouter((Register))
