import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import WorkflowSection from "./components/WorkflowSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <WorkflowSection />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
