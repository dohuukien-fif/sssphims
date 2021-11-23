import axiosClient from "./axiosClient";

const OldApi = {
  getAll(params) {
    const url = "/oldMove";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/oldMove/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/oldMove`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/oldMove/${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/oldMove/${id}`;
    return axiosClient.get(url);
  },
};
export default OldApi;
