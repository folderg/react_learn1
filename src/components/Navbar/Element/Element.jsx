import './Element.css'

const Element = (props) => {
    return (
        <li className="Element">
            <a href="#">
                <i class={props.icon} aria-hidden="true"></i>
                <div className="ElementText">{props.text}</div>
            </a>
        </li>
        
    )
}

export default Element;