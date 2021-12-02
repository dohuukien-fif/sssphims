import axiosClient from "./axiosClient";

const cinimerApi = {
  getAll(params) {
    const url = "/cinimer";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/cinimer/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/cinimer`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/cinimer/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/cinimer/${id}`;
    return axiosClient.get(url);
  },
};
export default cinimerApi;
