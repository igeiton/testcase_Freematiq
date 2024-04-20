// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

export interface Selects {
    selects: Item[];
}

export interface Item {
    id: number;
    from: string;
    to: string;
    amount: number;
}

const slice = createSlice({
    name: 'slice',
    initialState: {
        selects: [
            {
                id: new Date().getTime(),
                from: 'USD',
                to: 'RUB',
                amount: 1,
            },
            {
                id: new Date().getTime() + 1,
                from: 'EUR',
                to: 'RUB',
                amount: 1,
            },
        ],
    } as Selects,
    reducers: {
        addSelect(state, action) {
            state.selects.push(action.payload);
        },

        updateSelect(state, action) {
            const side: string = action.payload.side;
            const value: string = action.payload.value;

            const currentSelect: any = state.selects.find(
                (select) => select.id === action.payload.id
            );

            if (currentSelect) {
                currentSelect[side] = value;
            }
        },

        changeAmount(state, action) {
            const currentSelect: any = state.selects.find(
                (select) => select.id === action.payload.id
            );
            if (currentSelect) {
                currentSelect.amount = action.payload.amount;
            }
        },

        removeElement(state, action) {
            state.selects = state.selects.filter(
                (select) => select.id !== action.payload.id
            );
        },
    },
});

export const { addSelect, updateSelect, changeAmount, removeElement } =
    slice.actions;

export default slice.reducer;
