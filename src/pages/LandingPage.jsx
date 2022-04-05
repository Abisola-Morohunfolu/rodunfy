import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import GetStartedSection from '../components/GetStartedSection/GetStartedSection';
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<GetStartedSection />
			<ContactUsSection />
			<Footer />
		</>
	);
};

export default LandingPage;
