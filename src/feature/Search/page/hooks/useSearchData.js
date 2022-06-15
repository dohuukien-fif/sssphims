import * as React from "react";
import ProductApi from "../../../../api/movieHome";

export default function useSearchData(datas) {
  const [dataSearch, setproduct] = React.useState([]);
  const [LoadingSearch, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res = await ProductApi.getAll();

      const data = res.filter((e) =>
        e.desCast
          ?.toLowerCase()
          .includes(datas.replace("+", " ")?.split("=")[1].toLowerCase())
      );

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
