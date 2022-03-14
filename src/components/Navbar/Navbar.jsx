import Element from './Element/Element';
import './Navbar.css';
import s from './Navbar.module.css';

import react, {useState, useEffect} from 'react';
const Navbar = (props) => {

    const [isHovered, setHover] = useState(false);
    const hoverOn = () => { setHover(true);}
    const hoverOff = () => { setHover(false);}

    return (
        <div className={`Navbar_body ${isHovered? "hovered" : "" }`} onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}>
            
            <Element icon="bx bx-cart-alt" text="asdasdas"/>
            <Element icon="bx bxs-leaf" text="zxcz"/>
            <Element icon="bx bxl-unity" text="asdhgfasdas"/>
        </div>
    )
}

export default Navbar;