import {FC} from "react";
import s from './Wrapper.module.scss';
import {ReactNode} from "react";
type PropsType={
    imgPath:string,
    children:ReactNode
}
const Wrapper:FC<PropsType> = ({imgPath,children}) => {
    return (
        <div className={s.wrapper} style={{backgroundImage:`url(${imgPath})`}}>
            <div></div>
            {children}
        </div>
    );
};

export default Wrapper;
