import http from "./http";

interface LotteyItemInterface {
    number: string,
    qty: number,
    rating: number,
    status: string;
    img: string;
}

interface UpdateItem { 
    number: string;
    qty: number
}

export const getMyCart = () => {
    return http.get<LotteyItemInterface[]>('/cart');
}

export const increaseItemInCart = (body:UpdateItem) => {
    return http.put<any>('/cart', body);
}

export const decreaseItemInCart = (body:UpdateItem) => {
    return http.put<any>('/cart', body);
}

export const removeItemInCart = (body:UpdateItem) => {
    return http.put<any>('/cart', body);
}