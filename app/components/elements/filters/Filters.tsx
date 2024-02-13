import s from './Filters.module.scss';

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

]
const Filters = () => {
    return (
        <div className={s.filters}>
            {cities.map(city => (
                <button key={city.location} className={s.btn}>
                    {city.location}
                </button>
            ))}
        </div>
    );
};

export default Filters;
