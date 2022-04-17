import http from "./http";

interface LotteyItemInterface {
    number: string,
    qty: number,
    rating: number,
    status: string;
    img: string;
}

export const getAllLottery = () => {
    return http.get<LotteyItemInterface[]>('/lottery/all');
}

