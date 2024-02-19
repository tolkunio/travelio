import s from './Filters.module.scss';
import cn from 'classnames';
import {useState} from "react";
import {TypeSetState} from "@/app/type/common.type";
import {IPlace} from "@/app/type/place.type";
import {FC} from "react";

const cities = [
    {
        location: 'Paris'
    },
    {
        location: 'Brazil'
    },
    {
        location: 'Norway'
    },
    {
        location: 'Bora Bora'
    },
    {
        location: 'Maul'
    },
    {
        location: 'Tahiti'
    },

]
interface IFilter{
    setPlaces:TypeSetState<IPlace[]>
}
const Filters:FC<IFilter>= ({setPlaces}) => {
    const [filter, setFilter] = useState('');
    return (
        <div className={s.filters}>
            {cities.map(city => (
                <button
                    onClick={() => {
                        setFilter(city.location)
                    }}
                    key={city.location}
                    className={cn({
                        [s.active]: city.location === filter
                    })}
                >
                    {city.location}
                </button>
            ))}
        </div>
    );
};

export default Filters;
