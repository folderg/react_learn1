import Element from './Element/Element';
import './Navbar_body.css';
import s from './Navbar_body.module.css';

import react, {useState, useEffect} from 'react';
const Navbar_body = (props) => {

    const [isHovered, setHover] = useState(false);
    const hoverOn = () => { setHover(true);}
    const hoverOff = () => { setHover(false);}

    const listElements = props.nav_elements.map((d,i) => 
        <Element key={i} icon={d.icon} text={d.text} items={d.items}/>
    );
    return (
        <div className={`Navbar_body ${isHovered? "hovered" : "" }`} onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}>
            {listElements}
        </div>
    )
}

export default Navbar_body;