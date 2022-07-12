import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import axios from "axios";
import LoadingFileImage from "../../../../component/Loading/loadingFileImage";
const ModalManager = ({ isOpens, data, onSubmits, handleClosenew }) => {
  const [values, setValue] = useState({});
  const [fileImage, setFileImages] = React.useState("");
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const handChangeInput = (e) => {
    const { value, name } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const id = Date.now();
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
  console.log(id);
  const handleSubmit = () => {
    console.log({ values, id });
    if (onSubmits) {
      onSubmits({ ...values, id: data.id });
    }

    setValue({});
  };

  console.log("values", values);
  return (
    <div
      className={isOpens ? "modalManager active--modalManager" : "modalManager"}
    >
      <div className="modalManager__swap">
        {/* TÊN - GIỚI TÍNH */}
        <div className="modalManager__block">
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Tên bạn :*</label>
              <input
                type="text"
                name="userName"
                placeholder={data?.userName}
                onChange={handChangeInput}
              />
            </div>
            <div className="modalManager__group--second">
              <label>Giới tính :*</label>
              <div className="modalManager__group--grende">
                <span>Name</span>
                <input
                  type="radio"
                  value="name"
                  name="grende"
                  onChange={handChangeInput}
                />
                <span>Nữ</span>
                <input
                  type="radio"
                  value="nữ"
                  name="grende"
                  onChange={handChangeInput}
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="modalManager__group--image">
            <label htmlFor="">Ảnh mô tả :*</label>
            <input
              type="file"
              id="files"
              onChange={handleChangeFiles}
              style={{ display: "none" }}
            />
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
          {/* NGÀY SINH */}
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Giày sinh :*</label>
              <input type="date" name="birthDay" onChange={handChangeInput} />
            </div>
          </div>
          {/* CHƯC VỤ */}
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Chức vụ :*</label>
              <input
                type="text"
                name="position"
                placeholder={data?.position}
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* CMND */}
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Cmnd/Cccd :*</label>
              <input
                type="text"
                name="identification"
                onChange={handChangeInput}
                placeholder={data?.identification}
              />
            </div>
          </div>
          {/* TELEPHONE */}
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Số điện thoai :*</label>
              <input
                type="text"
                name="telephone"
                placeholder={data?.telephone}
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* Address */}
          <div className="modalManager__group">
            <div className="modalManager__group--second">
              <label>Địa chỉ :*</label>
              <input
                type="text"
                placeholder={data?.address}
                name="address"
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* name */}
          <div className="modalManager__group">
            <div className="modalManager__group--btn">
              <button onClick={handleSubmit}>Xác nhận</button>
              <button onClick={handleClosenew}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalManager.propTypes = {};

export default ModalManager;
