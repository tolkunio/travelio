import s from './Filters.module.scss';
import cn from 'classnames';
import {useState} from "react";

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
const Filters = () => {
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
