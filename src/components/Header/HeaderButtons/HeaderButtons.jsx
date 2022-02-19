import HButton_menu from './HButtons/HButton_menu'
import HButton_messages from './HButtons/HButton_messages'
import HButton_notifications from './HButtons/HButton_notifications'
import s from './HeaderButtons.module.css'

const HeaderButtons = () =>{
    return (
          
          <div className={s.HeaderButtons}>
            <HButton_menu badge={3}/>
            <HButton_messages badge={4}/>
            <HButton_notifications badge={3}/>
          </div>

    );
  }
  
  export default HeaderButtons;
  