import {connect} from "react-redux";
import Navbar_body from './Navbar_body';


let mapStateToProps = (state) => {
    return {
        nav_elements: state.navbar.nav_elements
    }
}
const Navbar_bodyContainer = connect(mapStateToProps)(Navbar_body);

export default Navbar_bodyContainer;
