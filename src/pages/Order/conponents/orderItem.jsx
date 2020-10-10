import React from 'react'
import './orderItem.scss'
import  { withRouter } from 'react-router-dom'
class OrderItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={ }
    }
    handleDetail = (item) => {
        console.log(item)
        this.props.history.push(`/orderDetail/${item.id}`)
    }
    render () {
        return (
            <div className="list-box">
                {
                    this.props.orderData.map((item, index) => {
                        return (
                            <div className="list-item" key={index} onClick={ this.handleDetail.bind(this, item) }>
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
export default withRouter(OrderItem)