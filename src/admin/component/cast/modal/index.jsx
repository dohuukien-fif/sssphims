import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import axios from "axios";

import LoadingFileImage from "./../../../../component/Loading/loadingFileImage/index";

const ModalCast = memo(
  ({ isOpen, isOpens, data, onSubmits, newModalRefs, handleIsClose }) => {
    const [modalConfirm, setmodalConfirm] = useState(false);

    const [values, setValue] = useState({
      name: "",
      description: "",
      nation: "",
    });
    const [fileImage, setFileImages] = React.useState("");
    const [file, setFile] = React.useState();
    const [dataValue, setdataValue] = React.useState({});
    const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
    const uid = Date.now();
    const handChangeInput = (e) => {
      const { value, name } = e.target;
      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const id = Date.now();

    console.log(id);

    const handleClickModalConfirm = async () => {
      if (onSubmits) {
        await onSubmits({
          ...values,
          id: uid,
          nation: values.nation,
          image: fileImage,
        });
      }
      setmodalConfirm(false);
      setValue({
        nation: "",
        name: "",
        description: "",
      });
      setFileImages("");
    };
    const handleClickCloseModalConfirm = () => {
      setmodalConfirm(false);
    };
    const handleSubmit = () => {
      console.log({ values, id });
      if (onSubmits) {
        onSubmits({ ...values, id: data.id });
      }

      setValue({});
    };

    console.log("values", values);

    console.log(fileImage);

    const handleChangeInput = (e) => {
      const { value, name } = e.target;

      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleChangeFiless = async (e) => {
      setLoadingfileImage(true);
      const file = e.target.files[0];

      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", "upload");

      try {
        const uploadRe = await axios.post(
          "https://api.cloudinary.com/v1_1/huukien/image/upload",
          data
        );
        console.log(data);
        console.log(uploadRe.data);

        const { url } = uploadRe.data;

        console.log("url", url);
        setFileImages(url);
        setLoadingfileImage(false);
      } catch (error) {}
    };
    const handleSubmitForm = async () => {
      const newValue = {
        ...values,
        id: uid,
        nation: values.nation,
        image: fileImage,
      };
      setmodalConfirm(true);
      setdataValue(newValue);
    };

    console.log(values);
    return (
      <div
        className={isOpen ? "cast__modal active__cast" : "cast__modal"}
        ref={newModalRefs}
      >
        <div className="cast__modal--swap">
          <div className="cast__modal--title">
            <span>Th??m di???n vi??n m???i</span>
          </div>

          <div className="cast__modal--form">
            <div className="cast__modal--group">
              <label htmlFor="">Qu???c gia :*</label>
              <select name="nation" id="" onChange={handleChangeInput}>
                <option value="">Ch???n qu???c gia</option>
                <option value="M???">M???</option>
                <option value="Trung qu???c">Trung qu???c</option>
                <option value="Vi???t nam">Vi???t nam</option>
              </select>
            </div>
            <div className="cast__modal--group">
              <label htmlFor="">Name :*</label>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="vui l??ng nh???p t??n di???n  vi??n"
                onChange={handleChangeInput}
              />
            </div>

            <div className="cast__modal--group">
              <label htmlFor="">???nh m?? t??? :*</label>
              <input
                type="file"
                id="file"
                onChange={handleChangeFiless}
                accept=".jpg, .jpeg, .png"
                multiple
              />
              {fileImage === "" && (
                <label htmlFor="file">
                  <span>Upload file</span>
                </label>
              )}
              {LoadingfileImage ? (
                <LoadingFileImage />
              ) : (
                <> {fileImage !== "" && <img src={fileImage} alt="" />}</>
              )}
            </div>
            <div className="cast__modal--group">
              <label htmlFor="">M?? t??? :*</label>
              <textarea
                name="description"
                value={values.description}
                placeholder="M??  t??? v???  di???n  vi??n"
                onChange={handleChangeInput}
              ></textarea>
            </div>

            <div className="cast__submit">
              <button onClick={handleSubmitForm}>x??c nh???n</button>
              <button onClick={handleIsClose}>????ng</button>
            </div>
          </div>
        </div>
        <div
          className={
            modalConfirm ? "cast__confirm active__confirm" : "cast__confirm"
          }
        >
          <div className="cast__confirm--swap">
            <div className="cast__confirm--title">
              <span>B???n ch???c ch???n mu???n th??m</span>
            </div>

            <div className="cast__confirm--btn">
              <button onClick={handleClickModalConfirm}>?????ng ??</button>
              <button onClick={handleClickCloseModalConfirm}>????ng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ModalCast.propTypes = {};

export default ModalCast;
