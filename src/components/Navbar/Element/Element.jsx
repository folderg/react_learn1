import ElementList from './ElementList/ElementList';
import react, {useState, useEffect} from 'react';

import './Element.css'

const Element = (props) => {
    const navbar = document.querySelector(".navbar");
    
    const [isClicked, setClick] = useState(false);
    const clickOn = () => { setClick(true);}
    const clickOff = () => { setClick(false);}
    
    const zxc = () => {
        if(isClicked)
            clickOff();
        else
            clickOn();
    }
    
    return (
        <li className={`Element ${isClicked? "extended" : "" }`}>
            <a href="#" onClick={zxc}>
                <i class={props.icon} aria-hidden="true"></i>
                <div className="ElementText">{props.text}</div>
            </a>
            <ElementList />
            <ElementList />
            <ElementList />
        </li>
        
    )
}

export default Element;