import React,{Component} from 'react';
import { Table, Button, Input, message,Upload} from 'antd';
import {Link} from 'react-router'
import axios from 'axios';
import './style.css'
class ProjectList extends Component {
  constructor(props){
    super(props);
    const pagination = {showSizeChanger: true, showQuickJumper: true, showTotal: total => '共 ' + total + ' 条'};
    const sorter = {order: ""};
    this.state=({
      pagination,
      sorter
    })
  }
 //渲染  操作列
  showTitle = (record) =>{
    if(record.status === "0"){
      return ( 
        <div>
          <Link to={{pathname: '/PlanManagement/ProjectList/'+record.code}}>查看</Link>
          <Button size="small" type="primary">拆单</Button> 
        </div>
      )
    }else{
      return(
        <Link to={{pathname: '/PlanManagement/ProjectList/'+record.code}}>查看</Link>
      )
    }
  }
  //渲染 生产需求 领料单 列
  fixed = (record) =>{
    if(record.status === "0"){
      return(
        <span>无</span>
      )
    }else{
      return (
        <Button size="small" type="primary">下载</Button>
      )
    }
  }
  //校验上传文件
  beforeUpload = (file) =>{
    console.log('file',file)
    const isExle = file.type;
    if (isExle !== "application/vnd.ms-excel") {
      message.error('只能上传Exle文件!');
      return false;
    }else{
      return isExle
    }
  }
  // 搜索
  seProject = () =>{
    let ides= this.refs.content.refs.input.value;
    console.log('ides',ides);
  }
  render = () => {
    const columns=[
      {title:<span className="id">序号</span>,key:"order",render:(text,record,index) => index+1},
      {title:<span className="id">单据编号</span>,key:"key1",dataIndex:"key1"},
      {title:<span className="id">生产部门</span>,key:"key2",dataIndex:"key2"},
      {title:<span className="id">单据内最早的完成时间</span>,key:"key3",dataIndex:"key3"},
      {title:<span className="id">单据内最晚的完成时间</span>,key:"key4",dataIndex:"key4"},
      {title:<span className="id">操作</span>,key:"key5",dataIndex:"key5"},
      {title:<span className="id">生产需求</span>,key:"key6",dataIndex:"key6"},
      {title:<span className="id">领料单</span>,key:"key7",dataIndex:"key7"},
    ];
    const propParams = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      accept: '.xls,.xlsx',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        console.log('info',info)
        if (info.file.status !== 'uploading') {
          //console.log(info.file, info.fileList);
          console.log('info1',info)
        }
        if (info.file.status === 'done') {
          console.log('info3',info)
          message.success(`${info.file.name} 文件上传成功`);
        } else if (info.file.status === 'error') {
          console.log('info5',info)
          message.error(`${info.file.name} 文件上传失败.`);
        }
      }
    }
    return (
           <div className="Table-title">
                <Upload 
                    {...propParams} 
                    className="Add-1"
                    beforeUpload={this.beforeUpload} 
                    showUploadList={false}
                >
                  <Button>
                    导入计划单
                  </Button>
                </Upload>
                <span className="ClassGroup3">按单据编号：</span>
                <Input size="large"  style={{width:220,marginLeft:"20px"}} ref="content"/>
                <Button  type="primary" className="Add-1" style={{marginLeft:"120px",}} onClick={this.seProject}>搜索</Button>
                 {/* <Link to={{pathname: '/PlanManagement/Checkmore'}}>查看</Link> */}
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
export default ProjectList;