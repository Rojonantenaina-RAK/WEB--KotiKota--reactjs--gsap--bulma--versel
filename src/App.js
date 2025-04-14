//Bulma
import './../node_modules/bulma/css/bulma.min.css';
// Gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import {ScrollToPlugin} from 'gsap/all';

// Components
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';



gsap.registerPlugin(useGSAP)
// gsap.registerPlugin(ScrollToPlugin);

function App() {

  useGSAP( ()=> {
    //
  } );
  

  return (
    <div className="App has-navbar-fixed-top">
      <Header />
      <Main />

    </div>
  );
}

export default App;
