import React from 'react';
import {API_URL} from "@/app/constants";
import {IPlace} from "@/app/type/place.type";
import {GetStaticProps, GetStaticPaths, NextPage} from "next";
import Place from "@/app/components/screens/place/Place";

interface IPlacePage {
    place: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({place}) => {
    return (
        <Place place={place}/>
    );
};
export const getStaticProps: GetStaticProps =
    async ({params}) => {
        const result = await fetch(`${API_URL}/places/${params.slug}`);
        const place = await result.json();
        return {
            props: {place}
        }
    }

export const getStaticPaths: GetStaticPaths =
    async () => {
        const result = await fetch(`${API_URL}/places`);
        const places: IPlace[] = await result.json();
        const paths = places.map(place => ({
            params: {slug: place.slug}
        }));
        return {
            paths, fallback: true
        }
    };

export default PlacePage;
