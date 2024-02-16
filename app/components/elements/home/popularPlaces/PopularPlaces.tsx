import s from './PopularPlaces.module.scss';
import {FC} from "react";
import {IPlace} from "@/app/type/place.type";
import Link from "next/link";

interface IPopularPlaces {
    places: IPlace[]
}

const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
    return (
        <div className={s.popularPlaces}>
            <h2>Popular places</h2>
            {
                places.map(place => (
                    <Link key={place.slug} href={`/place/${place.slug}`}
                          className={s.place}
                          style={{backgroundImage: `url('${place.imagePath}')`}}>
                        {place.slug}
                        <div className={s.heading}>
                            {place.location.city + ', ' + place.location.country}
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default PopularPlaces;
