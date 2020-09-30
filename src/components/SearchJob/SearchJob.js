import React from 'react'
import { Layout, Button } from 'antd';
import { Input, Select } from 'antd';
import './SearchJob.css';
import { SearchOutlined } from '@ant-design/icons';


const { Option } = Select;
const { Content } = Layout;
const { Search } = Input;


function SearchJob() {
    return (
        <Content>
            <div className="content-bg-mask"> 
                <div className="content-container">
                    <h1>Find the Job That Fits Your Life</h1>
                    <p>We offer 12505 jobs vacation right now</p>
                    <div className="content-btn-search">
                        <Input  placeholder="Job title or keyword"  />
                        
                        <Select placeholder="Distrist"  >
                            <Option value="1">Distrist 1 </Option>
                            <Option value="2">Distrist 2</Option>
                            <Option value="3">Distrist 3</Option>
                            <Option value="5">Distrist 4</Option>
                        </Select>
                        <Button type="primary"><span><SearchOutlined /></span> Search</Button>
                    </div>
                </div>             
            </div>
            <div className="content-bg-overlap"></div>
        </Content>
    )
}

export default SearchJob;
