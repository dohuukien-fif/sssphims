import axiosClient from "./axiosClient";

const AnimeApi = {
  getAll(params) {
    const url = "/anime";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/anime/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/anime `;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/anime /${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/anime /${id}`;
    return axiosClient.get(url);
  },
};
export default AnimeApi;
