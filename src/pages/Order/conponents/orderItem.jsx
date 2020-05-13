import React from 'react'
import './orderItem.scss'
export default class OrderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={ }
    }
    render () {
        console.log(this.props)
        return (
            <div className="list-box">
                {
                    this.props.orderData.map((item, index) => {
                        return (
                            <div className="list-item" key={index}>
                                <div className="list-item-top">
                                    <span className="list-item-plate">{ item.plateNo }</span>
                                    <span className="list-item-status">{ item.state }</span>
                                </div>
                                <div className="list-item-parking">{ item.parkingName }</div>
                                <div className="list-item-time">{ item.parkingTime }</div>
                                <div className="list-item-bottom">
                                    <div>
                                        <span className="item-span">进场时间</span>
                                        <span>{ item.parkingIn }</span>   
                                    </div>
                                    <div className="last-item">
                                        <span className="item-span">进场时间</span>
                                        <span>{ item.parkingOut }</span>   
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}