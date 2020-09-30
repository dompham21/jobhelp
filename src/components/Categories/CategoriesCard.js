import React from 'react';
import { Card, Row, Col} from 'antd';
import { FiCoffee, FiPhoneCall } from 'react-icons/fi';
import { ImPencil } from 'react-icons/im';
import { RiRestaurant2Line } from 'react-icons/ri';
import { FaLanguage, FaDesktop } from 'react-icons/fa';
import { SiAdguard } from 'react-icons/si';
import { AiOutlineShop } from 'react-icons/ai';
import { GiLoveSong } from 'react-icons/gi';



const { Meta } = Card;
function CategoriesCard(props) {
    const { title,total,iconNum } = props;
    const renderIconCard = (i) =>{
        switch(i){
            case 1:
                return ( <FiCoffee/>)
            case 2: 
                return ( <ImPencil/>)
            case 3: 
                return ( <RiRestaurant2Line/>)
            case 4: 
                return ( <FaLanguage />)
            case 5: 
                return ( <AiOutlineShop/>)
            case 6: 
                return ( <FaDesktop />)
            case 7: 
                return ( <SiAdguard /> )
            case 8: 
                return ( <FiPhoneCall/>)
            case 9: 
                return ( <GiLoveSong />)
            default:
                return null;
        }
    }
    return (
        <Row className="content-card-container">
            <Col span={8} className="card-container-icon">
                {renderIconCard(iconNum)}
            </Col>
            <Col span={16}>
                <h2>{title}</h2>
                <p>({total})</p>
            </Col>
        </Row>
    )
}

export default CategoriesCard
