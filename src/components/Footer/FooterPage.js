import React from 'react';
import { Layout,Row, Col, Input} from 'antd';
import './FooterPage.css'
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineMail,AiOutlinePhone,AiOutlineTwitter,AiOutlineGooglePlus } from 'react-icons/ai';
import { FaTelegramPlane,FaFacebookF,FaLinkedinIn,FaGithub } from 'react-icons/fa';


const { Footer } = Layout;
const { Search } = Input;

function FooterPage() {
    return (
        <Footer>
            <div className="footer-container">
                <Row>
                    <Col  span={7} className="footer-item">
                        <h3>Job Help</h3>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <ul>
                            <li><VscLocation/> 20/F Green Road, Dhanmondi, Dhaka </li>
                            <li><AiOutlineMail/> info@jobhelp.com</li>
                            <li><AiOutlinePhone/> +0477 85X6 552</li>
                        </ul>
                    </Col>
                    <Col span={5} className="footer-item">
                        <h4>Helpful Links</h4>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Blog</li>
                        </ul>
                    </Col>
                    <Col span={5} className="footer-item">
                        <h4>Job Seekers</h4>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <ul>
                            <li>Create Account</li>
                            <li>Career Counseling</li>
                            <li>My Oficiona</li>
                            <li>FAQ</li>
                        </ul>
                    </Col>
                    <Col span={7} className="footer-item">
                        <h4>Newsletter</h4>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        <input placeholder="Email Address"></input>
                        <button><FaTelegramPlane/></button>
                    </Col>
                </Row>
            </div>
            <div>
                <div className="sub-footer">
                    <Row>
                        <Col span={18}><p className="no-copy">© 2020 Theme Vessel. All Rights Reserved.</p></Col>
                        <Col span={6}>
                            <ul className="footer-social-contact">
                                <li>
                                    <a><FaFacebookF/></a>
                                </li>
                                <li>
                                    <a><AiOutlineGooglePlus/></a>
                                </li>
                                <li>
                                    <a><FaLinkedinIn/></a>
                                </li>
                                <li>
                                    <a><AiOutlineTwitter/></a>
                                </li>
                                <li>
                                    <a><FaGithub/></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        </Footer>
    )
}

export default FooterPage
