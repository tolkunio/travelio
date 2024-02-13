import {IPlace} from "@/app/type/place.type";
import japan from '../../assets/images/japan.jpg';
import {NextApiRequest, NextApiResponse} from "next";

const places = [
    {
        slug: 'tokyo',
        location: 'Japan',
        imagePath: japan,
        description: 'skfsofsofjsf',
        rating: 5,
        duration: '10 days',
        distance: 100,
        googleMapLink: 'fff',
        mapImage: 'ddd'
    },
];
export default function handler(req: NextApiRequest, res: NextApiResponse<IPlace>) {
    res.status(200).json(places);
}