
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route,hashHistory,IndexRedirect } from 'react-router';
//import {message} from 'antd';

import PlanManagement from './pages/PlanManagement';
import ProjectList from './pages/PlanManagement/ProjectList';
import DailyTask from './pages/PlanManagement/DailyTask';
import WorkingHours from './pages/WorkingHours'
import WeeklyHours from './pages/WorkingHours/WeeklyHours';
import DailyHours from './pages/WorkingHours/DailyHours';

import axios from 'axios';

//'/api'用于转发到gateway
axios.defaults.baseURL = '/';

ReactDOM.render((
       <Router history={hashHistory}>
          <Route path="/" component={App} key="23" >
          <IndexRedirect to="/PlanManagement/ProjectList"/>
              <Route path="PlanManagement" component={PlanManagement}>
                  <Route path="ProjectList" component={ProjectList}></Route>
                  <Route path="DailyTask" component={DailyTask}></Route>
              </Route>
              <Route path="WorkingHours" component={WorkingHours}>
                  <Route path="DailyHours" component={DailyHours}></Route>
                  <Route path="WeeklyHours" component={WeeklyHours}></Route>
              </Route>
          </Route>
      </Router>

), document.getElementById('root'));

// //登陆 
// //刷新cookie,保持会话状态
// setInterval(function(){axios.patch("/session/refresh");},360000);
//
// //检查cookie,判断是否为登陆状态
// axios({
//     url:"/session/checkLogin",
//     method:"post",
//     withCredentials:true
// }).then(res => {
//     if(res.data.code == 200){
//         if(res.data.data == "-1"){
//             message.warning("请先登录");
//             window.location.href = "/login.html"
//             return;
//         }
//         ReactDOM.render((
//             <Router history={hashHistory}>
//           <Route path="/" component={App} key="23" >
//           <IndexRedirect to="/PlanManagement/ProjectList"/>
//               <Route path="PlanManagement" component={PlanManagement}>
//                   <Route path="ProjectList" component={ProjectList}></Route>
//                   <Route path="DailyTask" component={DailyTask}></Route>
//               </Route>
//               <Route path="WorkingHours" component={WorkingHours}>
//                   <Route path="DailyHours" component={DailyHours}></Route>
//                   <Route path="WeeklyHours" component={WeeklyHours}></Route>
//               </Route>
//           </Route>
//       </Router>
//         ), document.getElementById('root'));
//
//     }else if(res.data.code == "601"){
//         message.warning("登录超时");
//         window.location.href = "/login.html"
//     }else{
//         message.warning("请先登录");
//         window.location.href = "/login.html"
//     }
// }).catch(e =>{
//     message.error("系统出错,请重新尝试")
//     window.location.href = "/login.html"
// })