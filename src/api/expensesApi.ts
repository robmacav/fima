import apiClient from './apiClient';

export const getExpenses = async () => {
  try {
    const response = await apiClient.get('/expenses');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createExpense = async (expenseData: any) => {
  try {
    const response = await apiClient.post('/expenses', expenseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateExpense = async (id: string, expenseData: any) => {
  try {
    const response = await apiClient.put(`/expenses/${id}`, expenseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteExpense = async (id: string) => {
  try {
    const response = await apiClient.delete(`/expenses/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
