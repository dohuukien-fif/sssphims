import React from "react";
import PropTypes from "prop-types";

ChoosingVideo.propTypes = {};

function ChoosingVideo({ videos, onChanges }) {
  const handle = (index, pratice) => {
    onChanges(index, pratice);
    console.log(index);
  };
  return (
    <div className="video_action">
      {videos.map((items, index) => (
        <div className="btn_action" key={index}>
          <button onClick={() => handle(index, items.pratice)}>
            {items.pratice}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChoosingVideo;
