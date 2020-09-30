import React from 'react'
import { Layout, Card } from 'antd';
import CategoriesCard from './CategoriesCard';
import './Categories.css';

const { Content } = Layout;
function Categories() {
    
    return (
        <Content className="content-categories">
            <h1>Popular Categories</h1>
            <div className="content-categories-card">
                <CategoriesCard title="Coffe"  total="2001" iconNum={1}/>
                <CategoriesCard title="Education Training"  total="1754" iconNum={2}/>
                <CategoriesCard title="Restaurant"  total="534" iconNum={3}/>
                <CategoriesCard title="Translations"  total="341" iconNum={4}/>
                <CategoriesCard title="Sales & Marketing"  total="21" iconNum={5}/>
                <CategoriesCard title="Telecommunication"  total="56" iconNum={6}/>
                <CategoriesCard title="Guard"  total="4" iconNum={7}/>
                <CategoriesCard title="Tele Call"  total="90" iconNum={8}/>
                <CategoriesCard title="Singer"  total="6" iconNum={9}/>
            </div>
            
        </Content>
    )
}

export default Categories
