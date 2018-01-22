/**
 * Created by lijianye on 2017/12/14.
 */
import React, { Component } from 'react';
import {  Menu, Icon } from 'antd';
import { Link } from 'react-router';
import './style.less'
const SubMenu = Menu.SubMenu;
class SiderCustom extends Component {


    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
        theme: 'dark',
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }


    render() {
        return (

            <div >
                <div style={{width:'256px',height:'100%',overflow:'auto',backgroundColor:'rgba(0, 0, 0, 0.65)'}}>
                    <div style={{width:"256px",height:"65px",backgroundColor:"#108fe9"}}>
                        <img src={require('./img/logo.png')} style={{width:"40px",height:"40px",marginLeft:"20px",marginTop:"10px"}} />
                        <img src={require('./img/text_logo.png')} style={{width:"100px",height:"25px",marginTop:"10px",marginLeft:"10px"}} />
                    </div>
                    <Menu
                        mode="inline"
                        style={{ width: 256}}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        theme={this.state.theme}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>计划管理</span></span>}>
                            <Menu.Item key="1"><Link to={'/PlanManagement/ProjectList'}>计划列表</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={'/PlanManagement/DailyTask'}>每日任务列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>工时统计</span></span>}>
                            <Menu.Item key="5"><Link to={'/WorkingHours/DailyHours'}>每日物料平均工时</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={'/WorkingHours/WeeklyHours'}>每周物料平均工时</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
              
                </div>
            </div>
            
        )
    }
}

export default SiderCustom;