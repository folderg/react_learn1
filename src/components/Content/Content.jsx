import './test.css'
import s from './Content.module.css'
import React from "react";

import Chart from './Chart/ChartContainer';
import Chart1 from './Chart/Chart2';



const myStyle = {

}

const Content = (props) => {
    return (
        <div className={s.Content}>
            <div style={myStyle}>
                <Chart />
            </div>
            <div style={myStyle}>
                <Chart />
            </div>
            <div style={myStyle}>
                <Chart1 />
            </div>
            <div style={myStyle}>
                <Chart />
            </div>
        </div>
    )
}

export default Content;