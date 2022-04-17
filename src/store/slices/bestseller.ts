import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getAllLottery } from '../../api/lottery';

interface LotteyItemInterface {
    number: string,
    qty: number,
    rating: number,
    status: string;
    img: string;
}

interface BestSeller {
    loading: 'idle' | 'pending';
    error: any;
    all_items: LotteyItemInterface[];
}

const initialState: BestSeller = {
    loading: 'idle',
    error: '',
    all_items: [],
}

export const allLottery = createAsyncThunk(
    'lottery/all',
    async () => {
        const { data } = await getAllLottery();
        return data;
    }
)

const bsetSellerSlice = createSlice({
    name: 'bestSeller',
    initialState,
    reducers: { 

    },
    extraReducers: (builder) => { 
        builder.addCase(allLottery.pending, (state) => { 
            state.loading = 'pending';
        });
        builder.addCase(allLottery.fulfilled, (state, { payload }) => {
            state.loading = 'idle'; 
            state.all_items = payload;
        })
    }
});

export const bsetSeller = (state: RootState) => state.bestSeller;
export default bsetSellerSlice.reducer;