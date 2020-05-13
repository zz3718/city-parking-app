import React from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterAction from '@/store/actions/counter'
import './parking.scss'
class Parking extends React.Component{
    render () {
        return (
            <div className="parking-container">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { this.props.history.go(-1) }}
                >停车</NavBar>
                <div className="parking-contant">
                    停车
                    <p className="park-num">数字：{this.props.counters}</p>
                    <div className="btn-box">
                        <Button type="primary" size="small" onClick={ () => this.props.counterAction.increment(10) }>增加</Button>
                        <Button type="primary" size="small" onClick={ () => this.props.counterAction.decrement(3) }>减少</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counters: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Parking)

