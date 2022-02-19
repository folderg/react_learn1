
import s from './UserPad.module.css'

const UserPad = (props) =>{
    return (
      <div className={s.UserPad}>
        <img className={s.profilePic} src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/79/79f742f946917c00ff06544b25bf0449e26ed719_full.jpg" alt="" />
        
        <div className={s.description}>
            <div className={s.name}>{props.name}</div>
            <div className={s.status}>{props.status}</div>
        </div>
      </div>
    );
  }
  
  export default UserPad;
  