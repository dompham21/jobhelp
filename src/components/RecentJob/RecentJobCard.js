import React from 'react'
import {  Row, Button } from 'antd';
import { VscLocation } from 'react-icons/vsc';
import { GiAlarmClock } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

function RecentJobCard() {
    return (
            <Row className="recentjob-container-card">
                <div className="recentjob-card-logo">
                    <img src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/iscout/img/company-logo/logo-3.png"></img>
                </div>
                <div className="recentjob-card-info">
                    <h3>Social Media Expert</h3>
                    <div className="recentjob-card-list">
                        <div className="recentjob-card-item">
                            <VscLocation/> Distrist 9
                        </div>
                        <div className="recentjob-card-item">
                            <GiAlarmClock/> Full time
                        </div>
                        <div className="recentjob-card-item">
                            <RiMoneyDollarCircleLine/> 25.000vnd/h
                        </div>
                    </div>
                </div>
                <button className="recentjob-card-btn-apply">Apply Now</button>
            </Row>
    )
}

export default RecentJobCard
