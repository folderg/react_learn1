import './ElementList.css';

const ElementList = (props) => {
    const listItems = props.items.map((d, i) => 
        <li key={i} className="ElementList">
            <a  href="#" className="ElementListText">{d}</a>
        </li>
    );
    return (
        <div >
            {listItems}            
        </div>
        
    )
}

export default ElementList;