import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class Person extends React.Component{
    render () {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                >我的</NavBar>
                <div>
                    我的
                </div>
            </div>
        )
    }
}