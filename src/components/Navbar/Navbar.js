import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import './Navbar.css';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header }  = Layout;
const { SubMenu } = Menu;

function Navbar() {
   
    return(
            <Header>
                <nav className="navbar">
                    <Link to="/" className="logo" >
                        <img src="https://d29u17ylf1ylz9.cloudfront.net/jobhelp-preview/img/logo.png"></img>
                    </Link>
                    <Menu mode='horizontal' defaultSelectedKeys='1' > 
                        <SubMenu  title={'Homepage'}>
                            <Menu.Item key="1"><Link to="/employerlist">Employer List</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/joblist">Job List</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/candidateslist">Candidates List</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/employerlist-detail">Employer List Details</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu  title="Find job" key="sub2">
                            <Menu.Item key="4">Option 3</Menu.Item>
                            <Menu.Item key="5">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu  title="About us" key="sub3">
                            <Menu.Item key="6">Option 5</Menu.Item>
                            <Menu.Item key="7">Option 6</Menu.Item>
                        </SubMenu>

                            <Menu.Item key="10" className="menu-right-btn">
                                <Link to="/login" className="menu-right-login">Login / Register</Link>
                                <Button type="primary" className="menu-right-btn-post"><span><PlusOutlined /></span> Post Jobs</Button> 
                            </Menu.Item>
                    </Menu>
                </nav>
            </Header>

    );
}

export default Navbar
