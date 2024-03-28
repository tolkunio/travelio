import {IPlace} from "@/app/type/place.type";
import {FC} from "react";
import Layout from "@/app/components/common/Layout";
import Booktrip from "@/app/components/screens/place/booktrip/Booktrip";
import Information from "@/app/components/screens/place/Information/Information";
import Heading from "@/app/components/screens/place/heading/Heading";
import Wrapper from "@/app/components/screens/place/wrapper/Wrapper";

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({place}) => {
    return (
        <Layout isMaxWidth={false}>
            <Wrapper imgPath={place.imagePath}>
                <Heading/>
                <Information place={place}/>
                <Booktrip/>
            </Wrapper>
        </Layout>
    );
};

export default Place;
