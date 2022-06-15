// import AnimeApi from "./../../../../api/movieAnime";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// export default function useSearchBox() {
//   const [product, setproduct] = useState([]);
//   const [Loading, setLoading] = useState(true);
//   const location = useLocation();

//   const datasearch = location.pathname.split("=")[1];

//   console.log(datasearch);
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const res = await AnimeApi.getAll();
//         setproduct(
//           res.filter((item) =>
//             item.name.toLowerCase().includes(datasearch.toLowerCase())
//           )
//         );
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     })();
//   }, [datasearch]);

//   console.log(product);

//   return {
//     product,
//     Loading,
//   };
// }
