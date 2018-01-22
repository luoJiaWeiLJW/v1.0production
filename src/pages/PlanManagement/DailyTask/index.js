import React,{Component} from 'react';
import { Table, Button, Input, message,DatePicker,Select,Upload} from 'antd';
import axios from 'axios';
import './style.css'
const Option = Select.Option;
class DailyTask extends Component {
  constructor(props){
    super(props);
    const pagination = {showSizeChanger: true, showQuickJumper: true, showTotal: total => '共 ' + total + ' 条'};
    const sorter = {order: ""};
    this.state=({
      pagination,
      sorter
    })
  }
//获取 组别 状态
  selectGroup = (value) =>{
    console.log('group',value)
  }
  selectStatus = (value) =>{
    console.log('status',value)
  } 
  //搜索
  toSreach = () =>{
    let place = this.refs.content.refs.input.value;
    console.log('place',place)
  }
  //清空
  cleanAll = () =>{

  }
  //获取日期
  changeDate = (date, dateString) =>{
    console.log('date',date)
    console.log('dateString',dateString)
  }
  render = () => {
    const columns=[
      {title:<span className="id">序号</span>,key:"order",render:(text,record,index) => index+1},
      {title:<span className="id">时间</span>,key:"key1",dataIndex:"key1"},
      {title:<span className="id">工令号</span>,key:"key2",dataIndex:"key2"},
      {title:<span className="id">物料编码</span>,key:"key3",dataIndex:"key3"},
      {title:<span className="id">物料名称</span>,key:"key4",dataIndex:"key4"},
      {title:<span className="id">工序</span>,key:"key5",dataIndex:"key5"},
      {title:<span className="id">组别</span>,key:"key6",dataIndex:"key6"},
      {title:<span className="id">工位编码</span>,key:"key7",dataIndex:"key7"},
      {title:<span className="id">操作工人</span>,key:"key8",dataIndex:"key8"},
      {title:<span className="id">数量</span>,key:"key9",dataIndex:"key9"},
      {title:<span className="id">状态</span>,key:"key0",dataIndex:"key0"},
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
                <span className="ClassGroup">按时间：</span>
                <DatePicker format="YYYY-MM-DD"  onChange={this.changeDate}/>
                <span className="ClassGroup">按组别：</span>
                <Select style={{ width: 120 }} onSelect={this.selectGroup}>
                  <Option value="0">机加</Option>
                  <Option value="1">Lucy</Option>
                  <Option value="2">yiminghe</Option>
                </Select>
                <span className="ClassGroup">按工位：</span>
                <Input size="large"  style={{width:220}} ref="content"/>
                <span className="ClassGroup">按状态：</span>
                <Select style={{ width: 120 }} onSelect={this.selectStatus}>
                  <Option value="0">计划中</Option>
                  <Option value="1">执行中</Option>
                  <Option value="2">已完成</Option>
                  <Option value="3">异常</Option>
                </Select>
                <Button  type="primary" style={{marginLeft:"120px",}} onClick={this.toSreach}>搜索</Button>
                <Button style={{margin:"20px"}} onClick={this.cleanAll}>清空</Button>
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
export default DailyTask;