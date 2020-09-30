import React from 'react';




import './RecentJob.css';
import RecentJobCard from './RecentJobCard';
function RecentJob() {
    return (
        <div className="recentjob-container">
            <div className="recentjob-main-title">
                <h2 className="recentjob-title">Recent Jobs</h2>
                <a className="recentjob-showall">Browse All Jobs</a>
            </div>
            <RecentJobCard></RecentJobCard>
            <RecentJobCard></RecentJobCard>
            <RecentJobCard></RecentJobCard>
            <RecentJobCard></RecentJobCard>
            <RecentJobCard></RecentJobCard>
            
        </div>
    )
}

export default RecentJob
