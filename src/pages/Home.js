import React, { useState } from 'react'
import Hero from '../components/HeroComponent'
import Phone from '../components/PhoneComponent'
import FeatureSection from '../components/FeatureComponent/FeatureSection'
import Navbar from '../components/NavbarComponent'
import Sidebar from '../components/SidebarComponent'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
			<FeatureSection />
            <Phone />
        </>
    )
}

export default Home
