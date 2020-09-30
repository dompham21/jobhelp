import React from 'react'
import Navbar from './Navbar/Navbar'
import SearchJob from './SearchJob/SearchJob'
import Categories from './Categories/Categories'
import Stat from './Stat/Stat'
import RecentJob from './RecentJob/RecentJob'
import FooterPage from './Footer/FooterPage'

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <SearchJob></SearchJob>
            <Categories></Categories>
            <Stat></Stat>
            <RecentJob></RecentJob>
            <FooterPage></FooterPage>
        </div>
    )
}

export default Home
