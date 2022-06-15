import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
detailLisst.propTypes = {
  product: PropTypes.array,
};

function detailLisst({ product }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>;
}

export default detailLisst;
