import logo from './logo.svg';
import './App.css';
import s from './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import react, {useState, useEffect} from 'react';
import { wait } from '@testing-library/user-event/dist/utils';


// const sidebar_btn  = document.querySelector(".sidebar-btn");
// const navbar  = document.querySelector("navbar");

// sidebar_btn.addEventListener("click", () => {
//   document.body.classList.toggle("shrink");
//   console.log('clicked');
// });

// navbar.addEventListener("mouseover", (e) => {
//   navbar.classList.toggle("hovered");
// });
  
// navbar.addEventListener("mouseout", () => {
//   navbar.classList.toggle("hovered");
// });
// const func1 = (e) => {
//   // navbar.classList.toggle("hovered");
//   // navbar.toggleAttribute('hovered');
//   // setBgColour("#fafafa");
//   this.setState({ isActiveClass: true });
//   console.log('log');
// }
function App() {

  const [isHovered, setHover] = useState(false);


  const hoverOn = () => { setHover(true);}
  const hoverOff = () => { setHover(false);}

  return (
    <div className="app-wrapper">
      <div className="header" > <Header /></div>
      
      <div className={`navbar ${isHovered? "hovered" : "" }`} onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}><Navbar /></div>

      <div className="content"> <Content /></div>
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