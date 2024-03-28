import s from './Information.module.scss';
import { FiMapPin } from "react-icons/fi";
import { FaStar,FaCalendarAlt  } from "react-icons/fa";
import {FC} from "react";
import {IPlace} from "@/app/type/place.type";
import Map from "@/app/components/screens/place/Information/Map";

const Information:FC<{place:IPlace}> = ({place}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <FiMapPin color={'#e8e8e8'} size={20}/>
                <h1>
                    {`${place.location.city}, ${place.location.country}`}
                </h1>
            </div>
            <p className={s.desc}>
                {place.description}
            </p>
            <div className={s.additional}>
                <div className={s.additionalInfo}>
                    <FaStar color={'#FDAE32'} size={18}/>
                    <span>{`${place.rating}/10`}</span>
                </div>
                <div className={s.additionalInfo}>
                    <FaCalendarAlt color={'#565658'} size={18}/>
                    <span>{place.duration}</span>
                </div>
            </div>
            <Map/>
        </div>
    );
};

export default Information;
