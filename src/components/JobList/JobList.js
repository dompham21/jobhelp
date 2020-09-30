import React ,{useState}from 'react'
import { Row, Col, Select } from 'antd'
import TitleList from '../TitleList/TitleList'
import Navbar from '../Navbar/Navbar'
import SideBarLeft from '../SideBarLeft/SideBarLeft'
import FooterPage from '../Footer/FooterPage';
import PaginationList from '../Pagination/Pagination'
import RecentJobCard from '../RecentJob/RecentJobCard'
import OptionBar from '../OptionBar/OptionBar'


function JobList() {

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
                        <RecentJobCard/>
                        <RecentJobCard/>
                        <RecentJobCard/>
                        <RecentJobCard/>
                        <RecentJobCard/>
                        <RecentJobCard/>

                        <PaginationList/>
                    </Col>
                </Row>
            </div>
            <FooterPage/>
        </div>
    )
}

export default JobList
