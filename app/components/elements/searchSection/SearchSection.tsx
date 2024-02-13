import s from './SearchSection.module.scss';
import {FC} from "react";
import Search from "@/app/components/common/search/Search";

const SearchSection:FC = () => {
    return (
        <div className={s.top}>
        <h1> best places for trip</h1>
        <Search/>
        </div>
    );
};

export default SearchSection;
