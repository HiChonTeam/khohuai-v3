import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { RootState } from '..';
import * as API from '../../api/cart';

export const getMyCart = createAsyncThunk(
    'get_my_cart',
    async () => {
        const { data } = await API.getMyCart();
        return data;
    }
)

export const increaseToCart = createAsyncThunk(
    'increase_item',
    async (number: string) => {
        const body = {
            number,
            qty: 1
        }
        const { data } = await API.increaseItemInCart(body);
        return data;
    }
)
export const decreaseFromCart = createAsyncThunk(
    'decrease_item',
    async (number: string) => {
        const body = {
            number,
            qty: -1
        }
        const { data } = await API.decreaseItemInCart(body);
        return data;
    }
)
export const removeFromCart = createAsyncThunk(
    'remove_item',
    async (number: string) => {
        const body = {
            number,
            qty: 0
        }
        const { data } = await API.removeItemInCart(body);
        return data;
    }
)
interface LotteyItemInterface {
    number: string,
    qty: number,
    rating: number,
    status: string;
    img: string;
}

interface Cart {
    loading: 'idle' | 'pending';
    error: any;
    all_items: LotteyItemInterface[];
    totalPrice: number;
    totalQty: number;
    price: number;
}
const initialState: Cart = {
    loading: 'idle',
    error: '',
    all_items: [],
    totalPrice: 0,
    totalQty: 0,
    price: 80
}

const calculate = (data: any, price: number) => {

    const sumvalue = data.reduce(
        (sum: LotteyItemInterface, current: LotteyItemInterface) => {
            return {
                ...sum,
                qty: sum.qty + current.qty,
                total: (sum.qty + current.qty) * price,
            };
        },
        { qty: 0, total: 0 }
    );

    return sumvalue;
}

const cartSlice = createSlice({
    name: 'my cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getMyCart.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getMyCart.fulfilled, (state, { payload }) => {

            const { qty, total } = calculate(payload, 80);

            state.totalQty = qty;
            state.totalPrice = total;
            state.all_items = payload;
            state.loading = 'idle';
        });
        builder.addCase(increaseToCart.fulfilled, (state, { meta }) => {

            const number = meta.arg;
            const indexOfItem: number = state.all_items.findIndex((item) => item.number === number);

            if (indexOfItem > 0) {
                state.all_items[indexOfItem].qty = state.all_items[indexOfItem].qty + 1;

                const { qty, total } = calculate(state.all_items, 80);
                state.totalQty = qty;
                state.totalPrice = total;
            }
            else {
                // add new item
                state.all_items.push({ number, qty: 1, img: '', rating: 0, status: '' })
            }

        });
        builder.addCase(decreaseFromCart.fulfilled, (state, { meta }) => {

            const number = meta.arg;
            const indexOfItem = state.all_items.findIndex((item) => item.number === number);
            if (indexOfItem > 0) {
                state.all_items[indexOfItem].qty = state.all_items[indexOfItem].qty - 1;
                const { qty, total } = calculate(state.all_items, 80);
                state.totalQty = qty;
                state.totalPrice = total;
            }
        });
        builder.addCase(removeFromCart.fulfilled, (state, { meta }) => {
            const number = meta.arg;
            state.all_items = state.all_items.filter((item) => item.number !== number);
            const { qty, total } = calculate(state.all_items, 80);
            state.totalQty = qty;
            state.totalPrice = total;
        })
    }
});

export const cart = (state: RootState) => state.cart;
export default cartSlice.reducer;