import s from './Nav_header.module.css';
import './Nav_header.css';
import  {useState, useEffect} from 'react';

const Nav_header = (props) => {
    const navbar = document.querySelector(".navbar");
    // navbar.classList.toggle("expand");

    const [isClicked, setClick] = useState(false);

    const changeGrid = () => {
        setClick(!isClicked);
     }
    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        document.querySelector(".navbar").className = `navbar ${isClicked? "expand" : "" }`;

      });

    return (
        <div className="Navbar_header">
            <div className="navigation">
                <p>Navigation {props.charts}</p>                
            </div>
            <div className={s.Nav_button} onClick={changeGrid}>
                <i class="bx bx-menu"></i>
            </div>
        </div>        
        
    )
}

export default Nav_header;