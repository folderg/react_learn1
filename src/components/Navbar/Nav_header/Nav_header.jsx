import s from './Nav_header.module.css';
import './Nav_header.css';
import react, {useState, useEffect} from 'react';

const Nav_header = (props) => {
    const navbar = document.querySelector(".navbar");
    
    const [isClicked, setClick] = useState(false);
    const clickOn = () => { setClick(true);}
    const clickOff = () => { setClick(false);}
    

    function changeGrid(){
        setClick();
        navbar.classList.toggle("expand");
    }
    
    return (
        <div className="Navbar_header">
            <div className="navigation">
                <p>Navigation</p>                
            </div>
            <div className={s.Nav_button} onClick={changeGrid}>
                <i class="bx bx-menu"></i>
            </div>
        </div>        
        
    )
}

export default Nav_header;