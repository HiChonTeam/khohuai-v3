import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
const bsetSellerSlice = createSlice({
    name: 'bestSeller',
    initialState: { 
        data: [
            {
                id:'00',
                number: '123456',
                qty: 10
            },
            {
                id:'00',
                number: '876356',
                qty: 5
            },
            {
                id:'00',
                number: '176826',
                qty: 8
            },
            {
                id:'00',
                number: '993456',
                qty: 9
            },
            {
                id:'00',
                number: '244456',
                qty: 1
            }
        ]
    },
    reducers: { 

    }
});

export const bestSeller = (state: RootState) => state.bestSeller;
export default bsetSellerSlice.reducer;