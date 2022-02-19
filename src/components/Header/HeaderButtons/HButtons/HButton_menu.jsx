
import s from './HButton.module.css'

const HButton = (props) =>{
    return (
        <div className={s.HButton + " " + s.menu+ " " + s.badge} data-badge={props.badge}>
            <i class='bx bx-menu' ></i>
        </div>
    );
  }
  
  export default HButton;
  