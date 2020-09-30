import React from 'react';
import {  Row, Button } from 'antd';
import { VscLocation } from 'react-icons/vsc';
import { GoMail } from 'react-icons/go';
import { BsBriefcase } from 'react-icons/bs';
import './CandidatesListCard.css'

function CandidatesListCard() {
    return (
        <Row className="candidates-container-card">
                <div className="candidates-card-logo">
                    <img src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/iscout/img/avatar/avatar-1.jpg"></img>
                </div>
                <div className="candidates-card-info">
                    <h3>John Pitarshon</h3>
                    <div className="candidates-card-list">
                        <div className="candidates-card-item">
                            <BsBriefcase/> Web developer
                        </div>
                        <div className="candidates-card-item">
                            <VscLocation/> Distrist 1
                        </div>
                        <div className="candidates-card-item">
                            <GoMail/> info@jobhelp.com.vn
                        </div>
                    </div>
                </div>
                <button className="candidates-card-btn-apply">Short list</button>
        </Row>
    )
}

export default CandidatesListCard
