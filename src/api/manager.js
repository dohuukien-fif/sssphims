import axiosClient from "./axiosClient";

const ManagerApi = {
  getAll(params) {
    const url = "/manager";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/manager/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/manager`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/manager/${data.id}`;
    return axiosClient.patch(url, data);
  },
  detele(id) {
    const url = `/manager/${id}`;
    return axiosClient.get(url);
  },
};
export default ManagerApi;
