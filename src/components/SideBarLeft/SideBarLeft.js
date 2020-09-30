import React from 'react';
import './SideBarLeft.css';
import { Form, Select, Input, Checkbox, Collapse } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';


const { Panel } = Collapse;
function SideBarLeft() {
    const checkboxIcon = (e) => {
        if(!e.isActive){
            return (
                <AiFillPlusCircle/>
            )
        }
        else {
            return ( 
                <AiFillMinusCircle/>
            )
        }
    }
    return (
            <Sider className="sidebar-left" >
                <div className="sidebar-left-content">
                    <Form>
                        <Form.Item>
                            <Input placeholder="Search Keywords" className="sidebar-input" />
                        </Form.Item>
                        <Form.Item>
                            <Select defaultValue="All location" >
                                <Select.Option value="distrist1">Distrist 1</Select.Option>
                                <Select.Option value="distrist2">Distrist 2</Select.Option>
                                <Select.Option value="distrist3">Distrist 3</Select.Option>
                                <Select.Option value="distrist4">Distrist 4</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <Select defaultValue="All Categories" >
                                <Select.Option value="1">Education Training</Select.Option>
                                <Select.Option value="2">Restaurant</Select.Option>
                                <Select.Option value="3">Translations</Select.Option>
                                <Select.Option value="4">Sales & Marketing</Select.Option>
                                <Select.Option value="5">Telecommunication</Select.Option>
                                <Select.Option value="6">Coffe</Select.Option>
                                <Select.Option value="7">Guard</Select.Option>
                                <Select.Option value="8">Singer</Select.Option>
                                <Select.Option value="9">Tele Call</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                    <Collapse expandIcon={(e)=>checkboxIcon(e)} >
                        <Panel className="sidebar-jobtype" header="Job type">
                            <div>
                                <div><Checkbox></Checkbox> Full time </div>
                                <div><Checkbox></Checkbox> Part time </div>
                            </div>
                        </Panel>
                        <Panel className="sidebar-jobtype" header="Date Posted">
                            <div>
                                <div><Checkbox></Checkbox> Last Hour </div>
                                <div><Checkbox></Checkbox> Last 24 Hours </div>
                                <div><Checkbox></Checkbox> Last 7 Days </div>
                                <div><Checkbox></Checkbox> Last 30 Days </div>
                                <div><Checkbox></Checkbox> Last Years </div>
                            </div>
                        </Panel>
                        <Panel className="sidebar-jobtype" header="Experience">
                            <div>
                                <div><Checkbox></Checkbox> 1 Years </div>
                                <div><Checkbox></Checkbox> 2 Years </div>
                                <div><Checkbox></Checkbox> 3 Years </div>
                                <div><Checkbox></Checkbox> {'>'}3 Years </div>
                            </div>
                        </Panel>
                        <Panel className="sidebar-jobtype" header="Offerd Salary">
                            <div>
                                <div><Checkbox></Checkbox> 10k - 20k </div>
                                <div><Checkbox></Checkbox> 20k - 30k </div>
                                <div><Checkbox></Checkbox> 30k - 40k </div>
                                <div><Checkbox></Checkbox> 40k - 50k </div>
                            </div>
                        </Panel>

                    </Collapse>  
                </div>
                         
            </Sider>
    )
}

export default SideBarLeft
