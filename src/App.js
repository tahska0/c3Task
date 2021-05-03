
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Cards from './components/Cards';
import Text from './components/Text';
import Dragdrop from './components/dragdrop';

function App() {
  return (
    <Router>
      
      <Navbar />  
      <div className="container0">
      <div className='container1'>
      <Text />
      <Cards />
      </div>
      </div>
      <Dragdrop />
      <Switch>
        <Route path='/' />
      </Switch>

    </Router>
  );
}

export default App;
