// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Event from './Pages/Event'
import Nav from './Component/Nav';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Detailed-Event/:title/:id' component={Event} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
