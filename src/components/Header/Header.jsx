import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logotype from './Logotype/Logotype';
import Search from './Search/Search';
import UserPad from './UserPad/UserPad';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.Header}>
            <div className={s.Logotype}><Logotype /></div>
            <div className={s.Search}><Search /></div>
            <div className={s.HeaderButtons}><HeaderButtons /></div>
            <div className={s.UserPad}><UserPad name={"Mushroomer"} status={"Skill"}/></div>
        </div>
    )
}

export default Header;