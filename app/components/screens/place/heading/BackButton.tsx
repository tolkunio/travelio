import React from 'react';
import s from "@/app/components/screens/place/heading/Heading.module.scss";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import Link from "next/link";

const BackButton = () => {
    return (
        <Link href={'/'}>
              <span className={s.btnWrapper}>
                 <FaArrowAltCircleLeft size={20} color={'#e8e8e8'}/>
              </span>
        </Link>
    );
};

export default BackButton;
