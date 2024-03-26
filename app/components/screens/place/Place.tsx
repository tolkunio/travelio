import {IPlace} from "@/app/type/place.type";
import {FC} from "react";
import Layout from "@/app/components/common/Layout";
import Booktrip from "@/app/components/screens/place/booktrip/Booktrip";

interface IPlacePage {
    place: IPlace
}
const Place:FC<IPlacePage> = ({place}) => {
    return (
        <Layout>
            <Booktrip/>
            Place {place.slug}
        </Layout>
    );
};

export default Place;
