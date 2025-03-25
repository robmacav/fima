import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Income {
  id: string;
  name: string;
  amount: number;
  category: string;
}

interface IncomesState {
  incomes: Income[];
}

const initialState: IncomesState = {
  incomes: [],
};

const incomesSlice = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    setIncomes(state, action: PayloadAction<Income[]>) {
      state.incomes = action.payload;
    },
    addIncome(state, action: PayloadAction<Income>) {
      state.incomes.push(action.payload);
    },
    removeIncome(state, action: PayloadAction<string>) {
      state.incomes = state.incomes.filter(income => income.id !== action.payload);
    },
    updateIncome(state, action: PayloadAction<Income>) {
      const index = state.incomes.findIndex(inc => inc.id === action.payload.id);
      if (index !== -1) {
        state.incomes[index] = action.payload;
      }
    },
  },
});

export const { setIncomes, addIncome, removeIncome, updateIncome } = incomesSlice.actions;
export default incomesSlice.reducer;
