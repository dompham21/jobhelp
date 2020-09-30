import React, { useState } from 'react'
import TitleList from '../TitleList/TitleList'
import Navbar from '../Navbar/Navbar'
import { Row, Col } from 'antd'
import SideBarLeft from '../SideBarLeft/SideBarLeft'
import './EmployerList.css'
import FooterPage from '../Footer/FooterPage';
import EmployerListCard from './EmployerListCard'
import PaginationList from '../Pagination/Pagination'
import OptionBar from '../OptionBar/OptionBar'

function EmployerList() {
    
    return (
        <div>
            <Navbar/>
            <TitleList/>
            <div className="list-container">
                <Row>
                    <Col span={6}>
                        <SideBarLeft/>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={17} className="list-content">
                        <OptionBar/>
                        <EmployerListCard/>
                        <EmployerListCard/>
                        <EmployerListCard/>
                        <EmployerListCard/>
                        <PaginationList/>
                    </Col>
                </Row>
            </div>
            <FooterPage/>
        </div>
    )
}

export default EmployerList
