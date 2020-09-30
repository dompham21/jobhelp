import React from 'react'
import './EmployerListCard.css';
import { ImLocation } from 'react-icons/im';


function EmployerListCard() {
    return (
        <div className="employerlist-card-container">
            <img className="employer-logo" src="http://theme-vessel-templates.theme-vessel.ey.r.appspot.com/iscout/img/company-logo/logo-6.png"></img>
            <div className="employer-content">
                <h3>The little bahery</h3>
                <ul>
                    <li><ImLocation/> Distrist 1</li>
                    <li><a>4 Open Position</a></li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum.</p>
            </div>
        </div>
    )
}

export default EmployerListCard
