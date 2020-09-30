import React, { useState, useEffect } from 'react';
import './Stat.css';
import { Row, Col} from 'antd';
import { FiUser } from 'react-icons/fi';
import { RiBuilding4Line } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';



function Stat() {

    return (
        <div className="stat-counter">
            <Row className="stat-counter-container">
                <Col span={8}>
                    <FiUser/>
                    <h1>                    
                       2012
                    </h1>
                    <p>Members</p>
                </Col>
                <Col span={8}>
                    <BsBriefcase/>
                    <h1>
                      412
                    </h1>
                    <p>Jobs</p>
                    

                </Col>
                <Col span={8}>
                    <RiBuilding4Line/>
                    <h1>
                        232
                    </h1>
                    <p>Companies</p>
                </Col>
            </Row>
            
        </div>
    )
}

export default Stat
