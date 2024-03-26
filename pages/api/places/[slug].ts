import {NextApiRequest} from "next";
import {NextApiResponse} from "next";
import {places} from "@/pages/api/places/index";
import {IPlace} from "@/app/type/place.type";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IPlace> ,
) {
    res.status(200).json(places.find(place=>place.slug===req.query.slug));
}