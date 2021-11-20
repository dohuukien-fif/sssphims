import axiosClient from './axiosClient';

const SneakerApi = {
  getAll(params) {
    const url = '/sneaker';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/sneaker/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/sneaker`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/sneaker/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/sneaker/${id}`;
    return axiosClient.get(url);
  },
};
export default SneakerApi;
