import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import VisionMissionSection from '../components/VisionMissionSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <VisionMissionSection />
            <ServicesSection />
            <WhyChooseUs />
        </>
    )
}

export default Home