import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import Header from './components/Header/Header';
import GetStarted from './components/GetStarted/GetStarted';
import Logos from './components/Logos/Logos';
import DomainField from './components/DomainField/DomainField';
import OurServices from './components/OurServices/OurServices';
import ProficientPeople from './components/ProficientPeople/ProficientPeople';
import SSLSertificate from './components/SSLSertificate/SSLSertificate';
import ConnectPeople from './components/ConnectPeople/ConnectPeople';
import PersonalExperience from './components/PersonalExperience/PersonalExperience';
import Plans from './components/Plans/Plans';
import Questions from './components/Questions/Questions';
import BeginJourney from './components/BeginJourney/BeginJourney';
import Footer from './components/Footer/Footer';
function App() {
  return (
      <PrimeReactProvider>
            <Header/>
            <GetStarted/>
            <Logos/>
            <DomainField/>
            <OurServices/>
            <ProficientPeople/>
            <SSLSertificate/>
            <ConnectPeople/>
            <PersonalExperience/>
            <Plans/>
            <Questions/>
            <BeginJourney/>
            <Footer/>
      </PrimeReactProvider>
  );
}

export default App;
