import {connect} from "react-redux";
import Chart from './Chart';


let mapStateToProps = (state) => {
    return {
        charts: state.charts.charts
    }
}
const ChartContainer = connect(mapStateToProps,)(Chart);

export default ChartContainer;