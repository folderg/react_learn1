import Element1 from './Element1';
import Element2 from './Element2';
import Element3 from './Element3';
import Element4 from './Element4';

import './style.css';


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
            <Element1 value={props.chartsData.supportQuestions} />
            <Element2 value={props.chartsData.totalProfit} />
            <Element3 value={props.chartsData.todaysOrder} />
            <Element4 value={props.chartsData.todayVisitors} />
            
        </div>
        
    )
}

export default ChartsElement2;