import Element from './Element/Element';

import s from './Navbar.module.css'
import './Navbar.css'
const Navbar = (props) => {
    return (
        <div className="Navbar">
            <Element icon="bx bx-cart-alt" text="asdasdas"/>
            <Element icon="bx bxs-leaf" text="zxcz"/>
            <Element icon="bx bxl-unity" text="asdhgfasdas"/>
        </div>
    )
}

export default Navbar;