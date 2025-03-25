import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
}

interface ExpensesState {
  expenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setExpenses(state, action: PayloadAction<Expense[]>) {
      state.expenses = action.payload;
    },
    addExpense(state, action: PayloadAction<Expense>) {
      state.expenses.push(action.payload);
    },
    removeExpense(state, action: PayloadAction<string>) {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
    updateExpense(state, action: PayloadAction<Expense>) {
      const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
});

export const { setExpenses, addExpense, removeExpense, updateExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
