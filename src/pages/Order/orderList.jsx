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
                parkingName: '东冠恒鑫大厦停车场1',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00',
                id: 1
            },{
                plateNo: '浙A·877927',
                state: '已完成',
                parkingName: '东冠恒鑫大厦停车场2',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00',
                id: 2
            },{
                plateNo: '浙A·877927',
                state: '已完成',
                parkingName: '东冠恒鑫大厦停车场3',
                parkingTime: '停车3小时15分钟',
                parkingIn: '2020-07-22 15:05:00',
                parkingOut: '2018-07-22 15:05:00',
                id: 3
            }]
        }
        // this.handlerClick = this.handlerClick.bind(this)
    }
    // handlerClick = function(item){
    //     console.log(item, '===item')
    // }
    // handlerClick = (item) => {
    //     console.log(item)
    // }
    // componentDidMount() {
    //     console.log(this.handlerClick)
    // }
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
                    <div>
                        {/* <ul>
                            {
                                this.state.orderData.map((item, index) => {
                                    return (
                                    <li key={index} onClick={this.handlerClick.bind('',item)}>{ item.parkingName }</li>
                                    )
                                })
                            }
                        </ul> */}
                        <OrderItem orderData={this.state.orderData}/>
                    </div>
                    <div>
                        <OrderItem orderData={this.state.orderData}/>
                    </div>
                    <div>
                        <OrderItem orderData={this.state.orderData}/>
                    </div>
                </Tabs>
                </div>
            </div>
        )
    }
}