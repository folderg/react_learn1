
import Chart1 from './Chart1';
import Chart2 from './Chart2';



const ChartsElement1 = (props) => {
    return (
        <div  style={{height: '100%', width: '100%'}}>
            <div style={{width: '63%', height: '100%', display: 'inline-block'}}>
                <Chart1 />
            </div>
            <div style={{width: '35%', display: 'inline-block', verticalAlign: 'top;', marginTop: '35px'}}>
                <Chart2 />
            </div>
        </div>
    )
}

export default ChartsElement1;