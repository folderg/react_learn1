import logo from './logo.png'
import s from './Logotype.module.css'


const Logotype = () =>{
    return (
      <div className={s.Logotype}>
        <img src={logo} alt="" />
      </div>
    );
  }
  
  export default Logotype;
  