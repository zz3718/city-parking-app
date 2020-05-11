import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
export default class Navigation extends React.Component{
    render () {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                >导航</NavBar>
                <div>
                    导航
                </div>
            </div>
        )
    }
}