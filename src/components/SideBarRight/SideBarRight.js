import React from 'react'
import { Layout, Button, Form, Input } from 'antd'
import { IoIosEye } from 'react-icons/io'
import { ImLocation } from 'react-icons/im';
import { MdTouchApp } from 'react-icons/md';
import './SideBarRight.css'

const {  Sider } = Layout;

function SideBarRight() {
    return (
        <Sider className="sidebar-right">
            <div className="sidebar-right-content">
                <div className="sidebar-right-widget">
                    <Button className="widget-btn-showposition">7 Open Positions</Button>
                    <Button className="sidebar-right-btn-save">Save</Button>
                </div>
                <div className="sidebar-right-information">
                    <h1>Information</h1>
                    <div className="s-border"></div>
                    <div className="m-border"></div>
                    <ul>
                        <li>                      
                            <IoIosEye className="information-icon"/>
                            <h4>Viewed</h4>
                            <span>25470</span>
                        </li>
                        <li>
                            <ImLocation className="information-icon"/>
                            <h4>Locations</h4>
                            <span>United States, San Diego</span>
                        </li>
                        <li>
                            <MdTouchApp className="information-icon"/>
                            <h4>Categories</h4>
                            <span>Arts, Design, Media</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-right-contact">
                <h1>Contacts</h1>
                    <div className="s-border"></div>
                    <div className="m-border"></div>
                </div>
                <Form>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Name" style={{height:"45px",fontSize:"16px"}}></Input>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" type="email" style={{height:"45px",fontSize:"16px"}}></Input>
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <Input.TextArea placeholder="Write message" type="text" className="sidebar-right-form-textarea"></Input.TextArea>
                    </Form.Item>
                    <Button className="sidebar-right-form-btn-send">SEND MESSAGE</Button>
                </Form>
            </div>
        </Sider>
    )
}

export default SideBarRight
