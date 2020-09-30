import React from 'react'
import TitleList from '../TitleList/TitleList'
import Navbar from '../Navbar/Navbar'
import { Row, Col, Select } from 'antd'
import SideBarRight from '../SideBarRight/SideBarRight'
import './EmployerDetail.css';
import FooterPage from '../Footer/FooterPage'
import { ImLocation } from 'react-icons/im';
import { GiAlarmClock } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import { IoIosEye } from 'react-icons/io'
import { TiTick } from 'react-icons/ti'





function EmployerDetail() {
    return (
        <div className="employer-detail-container">
            <Navbar/>
            <TitleList/>
            <Row className="employer-detail-content">
                <Col span={16}>
                    <div className="employer-detail-company"> 
                        <div className="employer-detail-company-logo">
                            <img src='http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/iscout/img/company-logo/logo-3.png'></img>
                        </div>
                        <div className="employer-detail-company-info">
                            <h5>
                                Uk Event Support Specialist
                            </h5>
                            <ul>
                                <li><ImLocation/> Distrist 1</li>
                                <li><GiAlarmClock/> Full time</li>
                                <li><GoCalendar/> Oct 27, 2018</li>
                                <li><IoIosEye/> 25470</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="employer-detail-aboutus">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.</p>
                        <div className="employer-detail-amenities">
                            <ul>
                                <li><TiTick/> Cross-browser and platform testing as standard practice</li>
                                <li><TiTick/> Experience using Invision a plus</li>
                                <li><TiTick/> Experience in video production a plus or, at a minimum, a willingness to learn</li>

                            </ul>
                        </div>
                        <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin.</p>

                    </div>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                    <SideBarRight/>
                </Col>
            </Row>
            <FooterPage/>
        </div>
    )
}

export default EmployerDetail
