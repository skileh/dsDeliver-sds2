export type Product ={
    id: number;
    name: string;
    price: number;
    decription: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}