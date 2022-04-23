import Element1 from './Element1';
import Element2 from './Element2';
import Element3 from './Element3';
import Element4 from './Element4';

import './test.css';


const style = {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    boxSizing: 'border-box',
    gridGap: '10px',
    
}

const ChartsElement2 = (props) => {
    return (
        <div style={style}>
            <Element1 />
            <Element2 />
            <Element3 />
            <Element4 />
            
        </div>
        
    )
}

export default ChartsElement2;