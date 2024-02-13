type Location={
    city:string,
    country:string
}
export interface IPlace {
    slug:string,
    location: Location,
    imagePath: string,
    description: string,
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    duration:string,
    distance:string,
    googleMapLink:string,
    mapImage:string
}