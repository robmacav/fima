import apiClient from './apiClient';

export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (categoryData: any) => {
  try {
    const response = await apiClient.post('/categories', categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id: string, categoryData: any) => {
  try {
    const response = await apiClient.put(`/categories/${id}`, categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await apiClient.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
