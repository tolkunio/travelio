import s from './SearchSection.module.scss';
import {FC} from "react";
import Search from "@/app/components/common/search/Search";
import Filters from "@/app/components/elements/filters/Filters";
import mapImg from '../../../../assets/images/map.png';

const SearchSection: FC = () => {
    return (
        <section className={s.section} style={{backgroundImage: `url('${mapImg.src}')`}}>
            <div>
                <h1> best places for trip</h1>
                <Search/>
                <Filters/>
            </div>
        </section>
    );
};

export default SearchSection;
