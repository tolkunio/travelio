import s from './Heading.module.scss'
import {FC} from "react";
import Favorites from "@/app/components/screens/place/heading/Favorites";
import BackButton from "@/app/components/screens/place/heading/BackButton";

const Heading: FC = () => {
    return (
      <div className={s.headingWrapper}>
          <BackButton/>
          <Favorites/>
      </div>
    );
};

export default Heading;
