import s from './Heading.module.scss'
import {FC, useState} from "react";
import {BsBookmarkHeart} from "react-icons/bs";
import {IFavorites} from "@/app/type/place.type";
import Link from "next/link";

const data: IFavorites[] = [
    {
        name: 'Japan, Japan',
        slug: 'tokyo'
    },
    {
        name: 'Italy, Italy',
        slug: 'italy'
    }

]
const Favorites: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={s.bookmark}>
            <button onClick={() => setIsOpen(!isOpen)}>
            <span className={s.btnWrapper}>
                 <BsBookmarkHeart size={20} color={'#e8e8e8'}/>
            </span>
            </button>
            {isOpen && <ul>
                {data.map(item => <li key={item.slug}>
                    <Link href={`/place/${item.slug}`}>
                        {item.name}
                    </Link>
                </li>)}
            </ul>}
        </div>

    );
};

export default Favorites;
