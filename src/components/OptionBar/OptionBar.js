import React ,{useState}from 'react'
import { Row, Col, Select } from 'antd'
import { FaList, FaThLarge } from 'react-icons/fa'


const { Option } = Select;
function OptionBar() {
    const [activeViewBtnList, setActiveViewBtnList] = useState(true);
    
    const handleActiveViewBtn = () => {
        setActiveViewBtnList(!activeViewBtnList);
    }
    return (
        <div className="optionbar">
            <Row>
                <Col span={12} className="optionSort">
                    <span>Sort by:</span>
                    <Select defaultValue="relevance"  >
                        <Option value="relevance">Relevance</Option>
                        <Option value="newest">Newest</Option>
                        <Option value="oldest">Oldest</Option>
                        <Option value="random">Random</Option>
                    </Select>
                                
                </Col>
                <Col span={12} className="optionlist">
                    <a className={activeViewBtnList?'active-view-btn':''} onClick={()=>handleActiveViewBtn()}><FaList/></a>
                    <a className={activeViewBtnList?'':'active-view-btn'}  onClick={()=>handleActiveViewBtn()}><FaThLarge/></a>
                </Col>
            </Row>
        </div>
    )
}

export default OptionBar
