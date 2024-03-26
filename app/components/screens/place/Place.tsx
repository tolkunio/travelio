import {IPlace} from "@/app/type/place.type";
import {FC} from "react";
import Layout from "@/app/components/common/Layout";

interface IPlacePage {
    place: IPlace
}
const Place:FC<IPlacePage> = ({place}) => {
    return (
        <Layout>
            Place {place.slug}
        </Layout>
    );
};

export default Place;
