import React from 'react'
import { Form,Row, Col, Input, Button, Checkbox } from 'antd';
import {AiOutlineTwitter,AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Signup.css'
function Signup() {
    return (
            <div className="login-container">
            <Row>
                <Col span={24}>
                    <div className="login-form-box">
                        <div className="login-form-detail">
                            <img className="login-form-logo" src="https://d29u17ylf1ylz9.cloudfront.net/jobhelp-preview/img/logo.png"></img>
                            <h3 className="login-form-title">Sign into your account</h3>
                            <Form 
                                
                                name="basic"
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input placeholder="User Name"/>
                                </Form.Item>
                                <Form.Item 
                                    
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder="Email Address" type="email"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>
                                <Form.Item
                                    name="confirmpassword"
                                    rules={[{ required: true, message: 'Please input your confirm password!' }]}
                                >
                                    <Input.Password placeholder="Confirm Password" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" className="login-btn-submit">
                                    Signup
                                    </Button>
                
                                </Form.Item>
                                
                            </Form>
                            <ul className="login-social-contact">
                                <li >
                                    <a style={{background:'#4867aa',color:'white'}}><FaFacebookF/></a>
                                </li>
                                <li>
                                    <a style={{background:'#33CCFF',color:'white'}}><AiOutlineTwitter/></a>
                                </li>
                                <li>
                                    <a style={{background:'#db4437',color:'white'}}><AiOutlineGooglePlus/></a>
                                </li>
                                <li>
                                    <a style={{background:'#0177b5',color:'white'}}><FaLinkedinIn/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="login-footer">
                            <span>Already a member?<Link to ='/login'> Login here</Link></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Signup
