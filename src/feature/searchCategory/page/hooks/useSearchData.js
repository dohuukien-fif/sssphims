import * as React from "react";
import ProductApi from "../../../../api/movieHome";

export default function useSearchData(datas) {
  const [dataSearch, setproduct] = React.useState([]);
  const [LoadingSearch, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res = await ProductApi.getAll();

      const data = res.filter(
        (e) =>
          e.category
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .replace(/ /g, "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase() ===
          datas.replaceAll("-", "").replace(/ /g, "").toLowerCase()
      );

      console.log("datas", datas);
      console.log("data", data);

      setproduct(data);
      setLoading(false);
    };
    setdaSearchApi();
  }, [datas]);

  return {
    dataSearch,
    LoadingSearch,
  };
}
