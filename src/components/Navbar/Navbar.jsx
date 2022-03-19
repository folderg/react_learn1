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
            
            <Element icon="bx bx-cart-alt" text="asdasdas" items={['item1','item2','item3','item4']}/>
            <Element icon="bx bxs-leaf" text="zxcz" items={['item1','item2','item3','item4']}/>
            <Element icon="bx bxl-unity" text="asdhgfasdas" items={['item1','item2','item3','item4']}/>
        </div>
    )
}

export default Navbar;