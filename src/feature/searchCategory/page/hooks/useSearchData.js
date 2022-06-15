import * as React from "react";
import ProductApi from "../../../../api/movieHome";

export default function useSearchData(datas) {
  const [dataSearch, setproduct] = React.useState([]);
  const [LoadingSearch, setLoading] = React.useState(true);
  console.log("datas", datas);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res = await ProductApi.getAll();

      const data = res.filter(
        (e) =>
          e.category
            .replaceAll("-", "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase() === datas.toLowerCase()
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
