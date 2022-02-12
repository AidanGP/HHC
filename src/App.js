import Bg from './components/Bg';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Info from './components/Info';
import Specs from './components/Specs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Booth from './components/Booth';
import Economy from './components/Economy';


function App() {
  return (
    <>
      <NavBar />
      <Bg />
      <Welcome />
      <Specs />
      <Info />
      <Economy />
      <Booth />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
