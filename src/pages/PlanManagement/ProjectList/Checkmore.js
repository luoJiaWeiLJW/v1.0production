import React,{Component} from 'react';
import { Table, Button, Input, message} from 'antd';
import axios from 'axios';
import './style.css'
class Checkmore extends Component {
  constructor(props){
    super(props);
    const pagination = {showSizeChanger: true, showQuickJumper: true, showTotal: total => '共 ' + total + ' 条'};
    const sorter = {order: ""};
    this.state=({
      pagination,
      sorter
    })
  }
  //返回
  handleClick=()=>{
    window.history.go(-1);
  }
  render () {
    const columns=[
      {title:<span className="id">序号</span>,key:"order",render:(text,record,index) => index+1},
      {title:<span className="id">工令号</span>,key:"key1",dataIndex:"key1"},
      {title:<span className="id">产品编号</span>,key:"key2",dataIndex:"key2"},
      {title:<span className="id">产品名称</span>,key:"key3",dataIndex:"key3"},
      {title:<span className="id">数量</span>,key:"key4",dataIndex:"key4"},
      {title:<span className="id">机加完成时间</span>,key:"key5",dataIndex:"key5"},
      {title:<span className="id">砂组完成时间</span>,key:"key6",dataIndex:"key6"},
      {title:<span className="id">油漆完成时间</span>,key:"key7",dataIndex:"key7"},
      {title:<span className="id">包装完成时间</span>,key:"key8",dataIndex:"key8"},
      {title:<span className="id">备注</span>,key:"key9",dataIndex:"key9"},
    ];
    return (
           <div className="Table-title">
                <Button onClick={this.handleClick} className='back' >返回</Button>
                <span className="ClassGroup3">单据编号：</span>
                <span className="ClassGroup3">单据编号：</span>
                <span className="ClassGroup3">生产部门：</span>
                <span className="ClassGroup3">生产部门：</span>
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
export default Checkmore;