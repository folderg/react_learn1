import './test.css'
import s from './Content.module.css'
import React from "react";

import Chart from './Chart/ChartContainer';


const myStyle = {
    backgroundColor: "green"

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
            <div style={myStyle}>1
            </div>
            <div style={myStyle}>1
            </div>
        </div>
    )
}

export default Content;