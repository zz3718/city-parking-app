import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class OrderDetail extends React.Component{
    render () {
        return (
            <div className="order-detail-container">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >订单详情</NavBar>
                <div className="order-detail-content">
                    订单详情
                </div>
            </div>
        )
    }
}