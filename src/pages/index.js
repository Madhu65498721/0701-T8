import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import Services from '../components/Services';
import AboutAgency from '../components/AboutAgency';
import Process from '../components/Process';
import Achievements from '../components/Achievements';
import Testimonial from '../components/Testimonial';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Head>
      <title>Your Company</title>
      <meta name="description" content="Your Company - Transforming Your Business with Cutting-Edge Analytics Tools" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <HomeSection />
    <Services />
    <AboutAgency />
    <Process />
    <Achievements />
    <Testimonial />
    <Team />
    <Portfolio />
    <Pricing />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default Home;
