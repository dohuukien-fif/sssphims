import axiosClient from "./axiosClient";

const SeriesApi = {
  getAll(params) {
    const url = "/seriesMove";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/seriesMove/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/seriesMove `;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/seriesMove /${data}`;
    return axiosClient.get(url, data);
  },
  detele(id) {
    const url = `/seriesMove /${id}`;
    return axiosClient.get(url);
  },
};
export default SeriesApi;
