import {IPlace} from "@/app/type/place.type";
import {NextApiRequest, NextApiResponse} from "next";

export const places:IPlace[] = [
    {
        slug:'tokyo',
        location:{
            country:'Japan',
            city:'Kyoto'
        },
        imagePath:'http://localhost:3000/images/places/japan.jpg',
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
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
        description:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        rating:8,
        duration:'14 days',
        distance:'9000',
        googleMapLink:'ff',
        mapImage:'ddd'
    }
];
export default function handler(req: NextApiRequest, res: NextApiResponse<IPlace>) {
    res.status(200).json(places);
};

