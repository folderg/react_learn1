import s from './Charts.module.css'
import React from "react";

import Chart from './Chart/Chart';
import Chart1 from './Chart/Chart1';
import Chart2 from './Chart/Chart2';
import Chart3 from './Chart/Chart3_0';
import Chart3_1 from './Chart/Chart3_1';

import ChartsElement1 from './ChartsElements/ChartsElement1/ChartsElement1';
import ChartsElement2 from './ChartsElements/ChartsElement2/ChartsElement2';
import ChartsElement3 from './ChartsElements/ChartsElement3/ChartsElement3';
import RealtimeChart from './ChartsElements/ChartsElement4/RealtimeChart';
import ChartsElement5 from './ChartsElements/ChartsElement5/Profile';


import Button from 'react-bootstrap/Button';

const myStyle = {
    minHeight: '300px'

}

const Charts = (props) => {
    return (
        <div className={s.Charts}>
            <ChartsElement1 chartsData={props.charts.chartsData1}/>
            <ChartsElement2 chartsData={props.charts.chartsData2}/>
            
            <div style={myStyle}>
                <ChartsElement3 chartsData={props.charts.chartsData3}/>
            </div>

            <div style={myStyle}>
                <RealtimeChart chartsData={props.charts.chartsData4} />                
            </div>
                
                <ChartsElement5 />
            <div>
                {/* <Chart3 /> */}
            </div>

            <div>
                {/* <Chart3_1 /> */}
                {/* <Chart2 /> */}
            </div>

            <div className='card border-primary'>
                <div className="card-header">123</div>
                <div className="card-body">11111</div>
            </div>
        </div>
    )
}

export default Charts;
