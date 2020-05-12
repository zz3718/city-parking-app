import React from 'react'
import './poson.scss'
import { NavBar, Icon, List } from 'antd-mobile';
import person_icon from '../../assest/img/person_icon.png'
import shoucang_icon from '../../assest/img/shoucang.png'
import order_icon from '../../assest/img/dingdan.png'
import parking_icon from '../../assest/img/tingche.png'
import youhuquan_icon from '../../assest/img/youhuiquan.png'
import set_icon from '../../assest/img/set_icon.png'
import suggest_icon from '../../assest/img/suggest_icon.png'
import {
  withRouter
} from "react-router-dom";
const Item = List.Item;
class Person extends React.Component{
	handleLogin = () => {
		this.props.history.push('/login')
	}
	render () {
		return (
			<div>
				<NavBar
				mode="light"
				icon={<Icon type="left" />}
				onLeftClick={() => { this.props.history.go(-1) }}
				>我的</NavBar>
				<div className="person-container">
					<div className="person-top" onClick={ this.handleLogin }>
						<img src={person_icon} alt=""/>
						<span>车主</span>
					</div>
				</div>
				<div className="person-content">
						<div className="person-content-nav">
							<div>
								<img src={youhuquan_icon} alt=""/>
								<div>优惠券</div>
							</div>
							<div>
								<img src={order_icon} alt=""/>
								<div>我的订单</div>
							</div>
							<div>
								<img src={shoucang_icon} alt=""/>
								<div>收藏车场</div>
							</div>
							<div>
								<img src={parking_icon} alt=""/>
								<div>我的车辆</div>
							</div>
						</div>
						<div className="list-box">
							<List className="my-list">
								<Item
									arrow="horizontal"
									thumb={set_icon}
									multipleLine
									onClick={() => {}}
								>
									个人设置
								</Item>
								<Item
									arrow="horizontal"
									thumb={suggest_icon}
									multipleLine
									onClick={() => {}}
								>
									意见反馈
								</Item>
							</List>
						</div>
				</div>
			</div>
		)
	}
}
export default withRouter((Person))