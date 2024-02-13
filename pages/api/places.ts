import {IPlace} from "@/app/type/place.type";
import {NextApiRequest, NextApiResponse} from "next";

const places:IPlace[] = [
    {
        slug:'tokyo',
        location:{
            country:'Japan',
            city:'Kyoto'
        },
        imagePath:'http://localhost:3000/images/places/japan.jpg',
        description:'skfsofsofjsf',
        rating:5,
        duration:'10 days',
        distance:'100',
        googleMapLink:'ff',
        mapImage:'ddd'
    },
    {
        slug:'venezia',
        location:{
            country:'Italy',
            city:'Venezia'
        },
        imagePath:'http://localhost:3000/images/places/italy.jpg',
        description:'skfsofsofjsf',
        rating:8,
        duration:'14 days',
        distance:'9000',
        googleMapLink:'ff',
        mapImage:'ddd'
    }
];
export default function handler(req: NextApiRequest, res: NextApiResponse<IPlace>) {
    res.status(200).json(places);
}