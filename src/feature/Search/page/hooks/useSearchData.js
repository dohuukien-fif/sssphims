import * as React from "react";
import ProductApi from "../../../../api/movieHome";

export default function useSearchData(datas) {
  const [dataSearch, setproduct] = React.useState([]);
  const [LoadingSearch, setLoading] = React.useState(true);

  console.log(datas.split("=")[1].toLowerCase());
  React.useEffect(() => {
    setLoading(true);
    const setdaSearchApi = async () => {
      const res = await ProductApi.getAll();

      console.log("dataSearchdsdsssssssss", res);
      const data = res.filter((e) =>
        e.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D")
          .replace(/ /g, "")
          ?.toLowerCase()
          .includes(
            datas
              .replaceAll("+", "")
              .replace(/ /g, "")
              ?.split("=")[1]
              .toLowerCase()
          )
      );

      setproduct(data);
      setLoading(false);
    };
    setdaSearchApi();
  }, [datas]);

  console.log("dataSearchUseSearch", dataSearch);
  return {
    dataSearch,
    LoadingSearch,
  };
}
