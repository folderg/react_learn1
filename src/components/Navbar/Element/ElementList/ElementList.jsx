import './ElementList.css';

const ElementList = (props) => {
    const data =['ddsddd','asdad','asdad'];
    const listItems = props.items.map((d) => 
        <li className="ElementList">
            <a href="#">
                <div className="ElementListText">{d}</div>
            </a>
        </li>
    );
    return (
        <div >
            {listItems}            
        </div>
        
    )
}

export default ElementList;