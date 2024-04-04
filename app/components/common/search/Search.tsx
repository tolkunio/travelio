import s from './Search.module.scss';
import {useState,FC} from "react";
import {ChangeEvent} from "react";
import {IPlace} from "@/app/type/place.type";
import {TypeSetState} from "@/app/type/common.type";

interface ISearch {
    setPlaces: TypeSetState<IPlace[]>;
    initialPlaces:IPlace[];
    setIsLoading:TypeSetState<boolean>
}

const Search: FC<ISearch> = ({setPlaces,initialPlaces,setIsLoading}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const seachHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setIsLoading(true);
        const value=e.target.value;

        setSearchTerm(value);
        setTimeout(()=>{
            if(value){
                setPlaces(initialPlaces.filter(
                    place =>
                        place.location.city.toLowerCase().includes(value) ||
                        place.location.country.toLowerCase().includes(value)
                ))
            }else{
                setPlaces(initialPlaces);
                setIsLoading(false)
            }
        },1600)

    }
    return (
        <div className={s.search}>
            <span className='material-icons-outlined'>search</span>
            <input type={"text"}
                   onChange={seachHandler}
                   placeholder={'Search place...'}
                   value={searchTerm}/>
        </div>
    );
};

export default Search;
