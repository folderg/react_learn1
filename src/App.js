import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';


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
        <Navbar />
      </div>

      <div className="content"> 
        <Content />
        </div>
    </div>
  );
}

export default App;
