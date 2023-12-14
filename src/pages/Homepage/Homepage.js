import TopBanner from '../../components/TopBanner/TopBanner';
import AboutText from '../../components/AboutText/AboutText';
import NavBar from '../../components/NavBar/NavBar';
import SplitBox from '../../components/SplitBox/SplitBox';
import ContactForm from '../../components/ContactForm/ContactForm';


function Homepage () {
  return (
    <div>
      <TopBanner />
      <AboutText />
      <SplitBox />
    </div>
  );
}

export default Homepage;