import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categoriesGlass';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
