import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Companies from "../components/home/Companies";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import DashboardPreview from "../components/home/DashboardPreview";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;