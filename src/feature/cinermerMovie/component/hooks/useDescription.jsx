import cinimerApi from "./../../../../api/movieCinermer";
import { useState, useEffect } from "react";
export default function useDetailProduct(productId) {
  const [product, setproduct] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await cinimerApi.get(productId);
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
