import React from 'react'
import { NavBar, Icon, Tabs, Badge } from 'antd-mobile';
import OrderItem from './conponents/orderItem'
import './order.scss'
const tabs = [
    { title: <Badge>停车订单</Badge> },
    { title: <Badge>补缴订单</Badge> },
    { title: <Badge>共享订单</Badge> },
];
export default class OrderList extends React.Component{
    constructor() {
        super()
        this.state = {
            orderData: [{
                plateNo: '浙A·877927',
                state: '已完成',
                parkingName: '东冠恒鑫大厦停车场',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00'
            },{
                plateNo: '浙A·877927',
                state: '已完成',
                parkingName: '东冠恒鑫大厦停车场',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00'
            },{
                plateNo: '浙A·877927',
                state: '已完成',
                parkingName: '东冠恒鑫大厦停车场',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00'
            }]
        }
    }
    render () {
        return (
            <div className="order-list-container">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >我的订单</NavBar>
                <div className="order-list-content">
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ backgroundColor: '#fff' }}>
                        <OrderItem orderData={this.state.orderData}/>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                </div>
            </div>
        )
    }
}