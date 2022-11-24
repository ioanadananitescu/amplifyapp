import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { Footer } from './ui-components';
import { Maindesktopframe } from './ui-components';
import { NavBar } from './ui-components';

function App() {
  
  return ( 
    <div>
      <NavBar/>
      <Maindesktopframe />
      <Footer />
      </div>
  )
}

export default App;
