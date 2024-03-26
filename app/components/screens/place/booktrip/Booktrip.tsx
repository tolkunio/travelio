import s from './Booktrip.module.scss'
import { FaAngleRight } from "react-icons/fa";

const Booktrip = () => {
    const onClickBooktrip=()=>{
        console.log('booktrip')
    }
    return (
        <button className={s.btn} onClick={onClickBooktrip}>
            <span className={s.text}>Book a trip</span>
            <span className={s.icon}> <FaAngleRight size={20}/></span>
        </button>
    );
};

export default Booktrip;
