import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import LoadingFileImage from "./../../../../component/Loading/loadingFileImage/index";
import axios from "axios";

const ModalUpdate = memo(
  ({ isOpen, isOpens, data, updateModalRefs, onSubmits, handleIsClose }) => {
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
        await onSubmits(dataValue);
      }

      setFileImages("");

      setValue({
        name: "",
        description: "",
      });
      setmodalConfirm(false);
      setmodalConfirm(false);
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

    const handleChangeFiles = async (e) => {
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

    const handleChangeInput = (e) => {
      const { value, name } = e.target;

      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmitForm = () => {
      const newValue = {
        id: data.id,
        nation: values.nation !== "" ? values.nation : data.nation,
        name: values.name !== "" ? values.name : data.name,
        description:
          values.description !== "" ? values.description : data.description,
        image: fileImage !== "" ? fileImage : data.image,
      };
      setdataValue(newValue);
      setmodalConfirm(true);
    };
    return (
      <div
        className={isOpen ? "cast__modal active__cast" : "cast__modal"}
        ref={updateModalRefs}
      >
        <div className="cast__modal--swap">
          <div className="cast__modal--title">
            <span>Chỉnh sửa phim</span>
          </div>

          <div className="cast__modal--form">
            <div className="cast__modal--group">
              <label htmlFor="">Quốc gia :*</label>
              <select name="nation" id="" onChange={handleChangeInput}>
                <option value="">Chọn quốc gia</option>
                <option value="Mỹ">Mỹ</option>
                <option value="Trung quốc">Trung quốc</option>
                <option value="Việt nam">Việt nam</option>
              </select>
            </div>
            <div className="cast__modal--group">
              <label htmlFor="">Name :*</label>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder={data.name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="cast__modal--group">
              <label htmlFor="">Ảnh mô tả :*</label>
              <input type="file" id="files" onChange={handleChangeFiles} />
              {fileImage === "" && (
                <label htmlFor="files">
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
              <label htmlFor="">Mô tả :*</label>
              <textarea
                name="description"
                value={values.description}
                placeholder={data.description}
                onChange={handleChangeInput}
              ></textarea>
            </div>

            <div className="cast__submit">
              <button onClick={handleSubmitForm}>xác nhận</button>
              <button onClick={handleIsClose}>Đóng</button>
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
              <span>Bạn chắc chắn muốn thêm</span>
            </div>

            <div className="cast__confirm--btn">
              <button onClick={handleClickModalConfirm}>Đồng ý</button>
              <button onClick={handleClickCloseModalConfirm}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ModalUpdate.propTypes = {};

export default ModalUpdate;
