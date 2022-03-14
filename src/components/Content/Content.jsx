import './test.css'
import s from './Content.module.css'
import React from "react";

import Chart from './Chart';
import Chart1 from './Chart1';


const myStyle = {
    backgroundColor: "red"

}

const Content = (props) => {
    
    return (
        <div className={s.Content}>
            {/* <div className={s.test}>11111111111111111</div> */}
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