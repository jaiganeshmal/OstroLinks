import React, { useEffect, Suspense, lazy } from "react";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Roadmap from "../components/Roadmap";
import ProjectsSection from "../components/ProjectsSection";

const AboutSection = lazy(() => import("../components/AboutSection"));
const VisionMissionSection = lazy(() => import("../components/VisionMissionSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const SolarProjects = lazy(() => import("../components/SolarProjects"));
const ClientTestimonials = lazy(() => import("../components/ClientTestimonials"));
const OurExperts = lazy(() => import("../components/OurExperts"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const FaqSection = lazy(() => import("../components/FaqSection"));
const AgendaSection = lazy(() => import("../components/AgendaSection"));

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            {/* Suspense Loader */}
            <Suspense fallback={<Loader />}>
                <AboutSection />
                <AgendaSection />
                <Roadmap />
                <ProjectsSection />
                <VisionMissionSection />
                <ServicesSection />
                <WhyChooseUs />
                <SolarProjects />
                <ClientTestimonials />
                <OurExperts />
                <ContactSection />
                <FaqSection />
            </Suspense>
        </>
    );
};

export default Home;
