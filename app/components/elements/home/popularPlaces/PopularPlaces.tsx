import s from './PopularPlaces.module.scss';
import {FC} from "react";
import {IPlace} from "@/app/type/place.type";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


interface IPopularPlaces {
    places: IPlace[],
    isLoading: boolean
}

const PopularPlaces: FC<IPopularPlaces> = ({places, isLoading}) => {
    console.log(isLoading)
    return (
        <div className={s.popularPlaces}>
            <h2>Popular places</h2>
            {
                isLoading ?
                    <div className={s.skeleton}>
                        <Skeleton count={1}
                                  height={200}
                                  borderRadius={'20px'}
                                  baseColor='#1b1b1d'
                                  highlightColor='#2c2c2e'
                        />
                    </div>
                    :
                    places.length?(
                    places.map(place => (
                        <Link key={place.slug} href={`/place/${place.slug}`}
                              className={s.place}
                              style={{backgroundImage: `url('${place.imagePath}')`}}>
                            {place.slug}
                            <div className={s.heading}>
                                {place.location.city + ', ' + place.location.country}
                            </div>
                        </Link>
                    ))):<div className={s.notFound}>Not found</div>
            }
        </div>
    );
};

export default PopularPlaces;
