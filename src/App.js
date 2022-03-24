import logo from './logo.svg';
import './App.css';
import s from './components/Nav_header/Nav_header.module.css'
import Nav_header from './components/Nav_header/Nav_header'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import NavbarContainer from './components/Navbar/NavbarContainer';
import {Route} from "react-router-dom";


function App() {

  
  
  const nav_elements = [
    {
        icon: 'bx bx-cart-alt',
        text: 'asdasda',
        items: ['item1','item2','item3','item4']
    },
    {
        icon: 'bx bxs-leaf',
        text: 'asd',
        items: ['item1','item2','item3','item4']
    },
    {
        icon: 'bx bxl-unity',
        text: 'zxcza',
        items: ['item1','item2','item3','item4']
    }        
  ]

  return (
    <div className="app-wrapper">
      <div className="header" > <Header /></div>
      
      <div className="navbar">
        <Nav_header />
        {/* <Navbar nav_elements={nav_elements}/> */}
        <NavbarContainer  />

        {/* <Route path='/dialogs' render={ () => <NavbarContainer /> }/> */}
      </div>

      <div className="content"> 
        <Content />
        </div>
    </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}