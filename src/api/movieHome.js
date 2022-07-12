import axiosClient from "./axiosClient";

const ProductApi = {
  getAll(params) {
    const url = "/home";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/home/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/home`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/home/${data.id}`;
    return axiosClient.patch(url, data);
  },
  detele(id) {
    const url = `/home/${id}`;
    return axiosClient.get(url);
  },
};
export default ProductApi;
