import React from 'react'
import './home.scss'
import { SearchBar } from 'antd-mobile';
import add_icon from '../../assest/img/icon_add.png'
import add_bg_icon from '../../assest/img/add_bg.png'
export default class Home extends React.Component {
    addClickCar = () => {
        console.log('添加车辆')
    }
    render () {
        return (
            <div className="home-container">
                <SearchBar
                    placeholder="你想去哪"
                    ref={ref => this.manualFocusInst = ref}
                />
                <div className="add_car_box" onClick={ this.addClickCar }>
                    <div className="add_car_box_left">
                        <img src={add_icon} alt="" className="add_icon_style"/>
                        <span className="add_text_span">您还未添加车辆</span>
                    </div>
                    <img src={add_bg_icon} alt="" className="add_bg"/>
                </div>
            </div>
        )
    }
}