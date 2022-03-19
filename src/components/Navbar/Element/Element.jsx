import ElementList from './ElementList/ElementList';
import react, {useState, useEffect} from 'react';

import './Element.css'

const Element = (props) => {
    const navbar = document.querySelector(".navbar");
    
    const [isClicked, setClick] = useState(false);
    
    const extendToggle = () => {
        setClick(!isClicked);
    }
    
    return (
        <li className={`Element ${isClicked? "extended" : "" }`}>
            <a href="#" onClick={extendToggle}>
                <i className={props.icon} ></i>
                <div className="ElementText">{props.text}</div>
            </a>
            <ElementList items={props.items}/>
        </li>
        
    )
}

export default Element;