import s from './HeadingSection.module.scss';
import {FC} from "react";
import Search from "@/app/components/common/search/Search";
import Filters from "@/app/components/elements/filters/Filters";
import mapImg from '../../../../../assets/images/map.png';

const HeadingSection: FC = () => {
    return (
        <section className={s.headingSection} style={{backgroundImage: `url('${mapImg.src}')`}}>
            <div>
                <h1> best places for trip</h1>
            </div>
        </section>
    );
};

export default HeadingSection;
