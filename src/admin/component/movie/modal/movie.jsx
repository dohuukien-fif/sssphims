import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiAddFill } from "react-icons/ri";
import { AiOutlineSave } from "react-icons/ai";
const MovieModal = ({
  dataItem,
  Modal,
  closeRef,
  handleIsOpenInput,
  isOpenInput,
  handleIsCloseModal,
  onSubmit,
}) => {
  const [values, setValue] = useState({ pratice: 0, video: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    if (
      Number(values.pratice) < dataItem.movie[dataItem.movie.length - 1].pratice
    ) {
      return console.log("vui lòng nhập tập phim tiếp theo");
    }
    if (values.pratice === "") {
      return console.log("vui lòng nhập tập phim ");
    }
    if (values.video === "") {
      return console.log("vui lòng nhập đường link phim");
    }

    setIsOpen(true);
  };
  const handleIsClose = () => {
    setIsOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(values, "sssssssssss");

    await onSubmit({
      ...values,
      id: dataItem.id,
      pratice: Number(values.pratice),
    });

    setIsOpen(false);
    setValue({ pratice: 0, video: "" });
  };

  console.log(values);
  return (
    <>
      {Object.keys(dataItem).length > 0 && (
        <div className={Modal ? "modal active--modal" : "modal"} ref={closeRef}>
          <div className="modal__swap">
            {/*   UPDATE TOP */}
            <div className="modal__top">
              <div className="modal__top--left">
                <span>Tập phim</span>
              </div>
              <div className="modal__top--right">
                <span>Tập</span>
                <span>
                  {dataItem?.movie[dataItem?.movie?.length - 1].pratice}
                </span>
              </div>
            </div>
            <div className="modal__body">
              <div className="modal__home">
                <div className="modal__home--left">
                  <span>{dataItem.name}</span>
                </div>
                <div className="modal__home--right">
                  <button onClick={handleIsOpenInput}>
                    <RiAddFill /> Thêm
                  </button>
                </div>
              </div>
              {/*   UPDATE BODY */}
              {isOpenInput && (
                <div className="modal__input">
                  <div className="modal__input--group">
                    <input
                      type="number"
                      name="pratice"
                      placeholder="Tập"
                      value={values.pratice}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal__input--group">
                    <input
                      value={values.video}
                      type="text"
                      placeholder="Link"
                      name="video"
                      onChange={handleChange}
                    />
                  </div>
                  <button onClick={handleIsOpen}>
                    <AiOutlineSave />
                  </button>
                </div>
              )}
            </div>
            <div className="modal__btn">
              <button onClick={handleIsCloseModal}>Đóng</button>
            </div>
          </div>
        </div>
      )}

      <div className={isOpen ? "confirm active--confirm" : "confirm"}>
        <div className="confirm__swap">
          <div className="confirm__top">
            <p>Thêm tập phim mới</p>
          </div>
          <div className="confirm__bottom">
            <button type="button" onClick={handleSubmit}>
              Đồng ý
            </button>
            <button onClick={handleIsClose}>Trở về</button>
          </div>
        </div>
      </div>
    </>
  );
};

MovieModal.propTypes = {};

export default MovieModal;
