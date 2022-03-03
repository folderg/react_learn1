import s from './Content.module.css'
// import { Chart } from 'chart.js';
import React from "react";

import Chart from './Chart';



const Content = (props) => {
    
    
    return (
        <div className={s.Content}>
            
            <Chart />
        </div>
    )
}

export default Content;