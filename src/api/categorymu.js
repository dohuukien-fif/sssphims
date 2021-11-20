import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categoriesHat';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
