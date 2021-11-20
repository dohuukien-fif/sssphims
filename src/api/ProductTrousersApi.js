import axiosClient from './axiosClient';

const TrousersApi = {
  getAll(params) {
    const url = '/quan';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/quan/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/quan`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/quan/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/quan/${id}`;
    return axiosClient.get(url);
  },
};
export default TrousersApi;
