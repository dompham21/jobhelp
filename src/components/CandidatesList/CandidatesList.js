import React ,{useState}from 'react'
import { Row, Col, Select } from 'antd'
import TitleList from '../TitleList/TitleList'
import Navbar from '../Navbar/Navbar'
import SideBarLeft from '../SideBarLeft/SideBarLeft'
import FooterPage from '../Footer/FooterPage';
import PaginationList from '../Pagination/Pagination';
import OptionBar from '../OptionBar/OptionBar'
import CandidatesListCard from './CandidatesListCard'


function CandidatesList() {
    
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
                        <CandidatesListCard/>
                        <CandidatesListCard/>
                        <CandidatesListCard/>                        <CandidatesListCard/>
                        <CandidatesListCard/>


                        <PaginationList/>
                    </Col>
                </Row>
            </div>
            <FooterPage/>
        </div>
    )
}

export default CandidatesList
