import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import VisionMissionSection from '../components/VisionMissionSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import SolarProjects from '../components/SolarProjects'
import ClientTestimonials from '../components/ClientTestimonials'
import OurExperts from '../components/OurExperts'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

const Home = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <VisionMissionSection />
            <ServicesSection />
            <WhyChooseUs />
            <SolarProjects />
            <ClientTestimonials />
            <OurExperts />
            <ContactSection />
            <FaqSection />
        </>
    )
}

export default Home