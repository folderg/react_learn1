import {connect} from "react-redux";
import Charts from './Charts';


let mapStateToProps = (state) => {
    return {
        charts: state.charts
    }
}
const ChartContainer = connect(mapStateToProps)(Charts);

export default ChartContainer;