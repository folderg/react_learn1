import {connect} from "react-redux";
import Navbar from './Navbar';


let mapStateToProps = (state) => {
    return {
        nav_elements: state.navbar.nav_elements
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;