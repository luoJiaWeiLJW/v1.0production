import React,{Component} from 'react';
import { Table, Button, message,DatePicker} from 'antd';
import axios from 'axios';
import '../style.css'
class WeeklyHours extends Component {
  constructor(props){
    super(props);
    const pagination = {showSizeChanger: true, showQuickJumper: true, showTotal: total => '共 ' + total + ' 条'};
    const sorter = {order: ""};
    this.state=({
      pagination,
      sorter
    })
  }
  //获取日期
  changeDate = (date, dateString) =>{
    console.log('date',date)
    console.log('dateString',dateString)
  }
  render () {
    const columns=[
      {title:<span className="id">序号</span>,key:"order",render:(text,record,index) => index+1},
      {title:<span className="id">时间</span>,key:"key1",dataIndex:"key1"},
      {title:<span className="id">操作</span>,key:"key2",dataIndex:"key2"},
    ];
    return (
          <div className="Table-title">
                <span className="ClassGroup">按时间：</span>
                <DatePicker format="YYYY-MM-DD" style={{margin:'20px'}} onChange={this.changeDate}/>
                <Button  type="primary" style={{marginLeft:"120px",}}>搜索</Button>
                <Table
                    className="components-table-nested"
                    columns={columns}
                    rowKey={record=>record.id}
                    pagination={this.state.pagination}
                />
          </div>
        )
  }

}
export default WeeklyHours;