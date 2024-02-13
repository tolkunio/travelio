import s from './Search.module.scss';
import {useState} from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className={s.search}>
            <span className='material-icons-outlined'>search</span>
            <input type={"text"}
                   onChange={e => setSearchTerm(e.target.value)}
                   placeholder={'Search place...'}
                   value={searchTerm}/>
        </div>
    );
};

export default Search;
