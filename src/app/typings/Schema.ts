export interface Hotel {
    id: number;
    name: string;
    price: number;
    description: string;
    picture: string;
    cityName: string;
    street: string;
    number: string;
    services: HotelService[]
    averageCalification: number;
    available?: string;
}

export interface HotelService {
    id: number;
    name: string;
}