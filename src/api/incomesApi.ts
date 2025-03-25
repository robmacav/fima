import apiClient from './apiClient';

export const getIncomes = async () => {
  try {
    const response = await apiClient.get('/incomes');
    return response.data;
  } catch (error) {
    throw error; 
  }
};

export const createIncome = async (incomeData: any) => {
  try {
    const response = await apiClient.post('/incomes', incomeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateIncome = async (id: string, incomeData: any) => {
  try {
    const response = await apiClient.put(`/incomes/${id}`, incomeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteIncome = async (id: string) => {
  try {
    const response = await apiClient.delete(`/incomes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
