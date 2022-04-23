import s from './Charts.module.css'
import React from "react";

import Chart from './Chart/Chart';
import Chart1 from './Chart/Chart1';
import Chart2 from './Chart/Chart2';
import Chart3 from './Chart/Chart3_0';

import ChartsElement1 from './ChartsElements/ChartsElement1/ChartsElement1';
import ChartsElement2 from './ChartsElements/ChartsElement2/ChartsElement2';
import ChartsElement3 from './ChartsElements/ChartsElement3/ChartsElement3';


import Button from 'react-bootstrap/Button';

const myStyle = {
    maxHeight: '500px'

}

const Charts = (props) => {
    return (
        <div className={s.Charts}>
            <ChartsElement1 charts= {props.charts} />
            <ChartsElement2 />

            <div style={myStyle}>
                <Chart1 />
            </div>
            <div style={myStyle}>
                <Chart2 />
            <div>

            </div>
            </div>
            <div className='card border-primary'>
                <div className="card-header">123</div>
                <div className="card-body">11111</div>
            </div>
        </div>
    )
}

export default Charts;