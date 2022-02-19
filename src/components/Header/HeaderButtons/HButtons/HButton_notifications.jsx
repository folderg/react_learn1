
import s from './HButton.module.css'

const HButton = (props) =>{
    return (
        <div className={s.HButton + " " + s.notifications+ " " + s.badge} data-badge={props.badge}>
            <i class='bx bx-bell' ></i>
        </div>
    );
  }
  
  export default HButton;
  