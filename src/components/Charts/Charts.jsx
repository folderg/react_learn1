import './test.css'
import s from './Charts.module.css'
import React from "react";

import Chart from './Chart/Chart';
import Chart1 from './Chart/Chart1';
import Chart2 from './Chart/Chart2';
import Chart3 from './Chart/Chart3_0';

import ChartsElement1 from './ChartsElements/ChartsElement1/ChartsElement1';


const myStyle = {

}

const Charts = (props) => {
    return (
        <div className={s.Charts}>
            <div style={myStyle}>
                <ChartsElement1 charts= {props.charts} />
            </div>
            <div style={myStyle}>
                <Chart3 />
            </div>
            <div style={myStyle}>
                <Chart1 />
            </div>
            <div style={myStyle}>
                <Chart2 />
            </div>
        </div>
    )
}

export default Charts;