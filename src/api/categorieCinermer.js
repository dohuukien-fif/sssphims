import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categoriesShirt';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
