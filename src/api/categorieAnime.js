import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
