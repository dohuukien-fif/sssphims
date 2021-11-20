import axiosClient from './axiosClient';

const ShirtApi = {
  getAll(params) {
    const url = '/shrit';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/shrit/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/shrit`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/shrit/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/shrit/${id}`;
    return axiosClient.get(url);
  },
};
export default ShirtApi;
