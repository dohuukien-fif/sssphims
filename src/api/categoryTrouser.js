import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categoriesQuan ';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
