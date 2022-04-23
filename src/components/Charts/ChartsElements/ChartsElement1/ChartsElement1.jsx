
import Chart1 from './Chart1';
import Chart2 from './Chart2';

import s from './ChartsElement1.module.css';


const ChartsElement1 = (props) => {
    return (
        <div  className={s.chart}>
            <div className={s.LineGraph}>
                <Chart1 />
            </div>
            <div className={s.LiquidGraph}>
                <Chart2 />
            </div>
        </div>
    )
}

export default ChartsElement1;