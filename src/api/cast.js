import axiosClient from "./axiosClient";

const CastApi = {
  getAll(params) {
    const url = "/cast";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/cast/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/cast`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/cast/${data.id}`;
    return axiosClient.patch(url, data);
  },
  detele(id) {
    const url = `/cast/${id}`;
    return axiosClient.get(url);
  },
};
export default CastApi;
