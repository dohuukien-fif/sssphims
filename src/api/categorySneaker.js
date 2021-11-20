import axiosClient from './axiosClient';

const CategoryApi = {
  getAll(params) {
    const url = '/categoriesSneaker ';
    return axiosClient.get(url, { params });
  },
};
export default CategoryApi;
