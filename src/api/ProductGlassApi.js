import axiosClient from './axiosClient';

const GlassApi = {
  getAll(params) {
    const url = '/kinh';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/kinh/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/kinh`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/kinh/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/kinh/${id}`;
    return axiosClient.get(url);
  },
};
export default GlassApi;
