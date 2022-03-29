import ElementList from './ElementList/ElementList';
import {useState} from 'react';

import './Element.css'

const Element = (props) => {    
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