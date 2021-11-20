import axiosClient from './axiosClient';

const HatApi = {
  getAll(params) {
    const url = '/mu';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/mu/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/mu`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/mu/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/mu/${id}`;
    return axiosClient.get(url);
  },
};
export default HatApi;
