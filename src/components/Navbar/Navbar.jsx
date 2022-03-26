import Navbar_bodyContainer from "./Navbar_body/Navbar_bodyContainer";
import Nav_header from "./Nav_header/Nav_header";

const Navbar = (props) => {
    return (
        <div >
            <Nav_header />
            <Navbar_bodyContainer />
        </div>
    )
}

export default Navbar;