import OldApi from "./../../../../api/movieOld";
import { useState, useEffect } from "react";
export default function useDetailProduct(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await OldApi.get(productId);
        setproduct(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return {
    product,
    Loading,
  };
}
