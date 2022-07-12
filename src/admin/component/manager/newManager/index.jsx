import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import axios from "axios";
import LoadingFileImage from "../../../../component/Loading/loadingFileImage";
const NewModalManager = ({ isOpens, data, onSubmits, handleClosenew }) => {
  const [error, setError] = useState("");
  const [fileImage, setFileImages] = React.useState("");
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const [values, setValue] = useState({
    userName: "",
    gender: "",
    birthDay: "",
    position: "",
    identification: "",
    telephone: "",
    address: "",
  });

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
      console.log("url", url);
      console.log("url", url);
      console.log("url", url);
      setFileImages(url);
      setLoadingfileImage(false);
    } catch (error) {}
  };
  const handleSubmit = async () => {
    if (Object.values(values).includes("")) {
      return setError("vui lòng nhập đầy đủ thông tin");
    }
    if (fileImage === "") {
      return setError("vui lòng chọn ảnh của bạn...!");
    }
    if (onSubmits) {
      await onSubmits({ ...values, id, image: fileImage });
    }

    setValue({
      userName: "",
      gender: "",
      birthDay: "",
      position: "",
      identification: "",
      telephone: "",
      address: "",
    });
    setFileImages("");
  };

  console.log("values", error);
  console.log("values", values);
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(timeInterval);
  }, [error]);

  console.log("fileImage", fileImage);
  return (
    <div
      className={
        isOpens ? "newModalManager active--newModalManager" : "newModalManager"
      }
    >
      {error !== "" && <div className="error">{error}</div>}
      <div className="newModalManager__swap">
        {/* TÊN - GIỚI TÍNH */}
        <div className="newModalManager__block">
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Tên bạn :*</label>
              <input
                type="text"
                name="userName"
                value={values.userName}
                placeholder="Vui lòng nhập tên bạn..."
                onChange={handChangeInput}
              />
            </div>
            <div className="newModalManager__group--second">
              <label>Giới tính :*</label>
              <div className="newModalManager__group--grende">
                <span>Nam</span>
                <input
                  type="radio"
                  value="nam"
                  name="gender"
                  onChange={handChangeInput}
                />
                <span>Nữ</span>
                <input
                  type="radio"
                  value="nữ"
                  name="gender"
                  onChange={handChangeInput}
                />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="newModalManager__group--image">
            <label htmlFor="">Ảnh mô tả :*</label>
            <input
              type="file"
              id="filess"
              onChange={handleChangeFiles}
              style={{ display: "none" }}
            />

            {fileImage === "" && (
              <label htmlFor="filess">
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
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Giày sinh :*</label>
              <input type="date" name="birthDay" onChange={handChangeInput} />
            </div>
          </div>
          {/* CHƯC VỤ */}
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Chức vụ :*</label>
              <input
                type="text"
                name="position"
                placeholder="Vui lòng nhập Chức vụ..."
                value={values.position}
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* CMND */}
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Cmnd/Cccd :*</label>
              <input
                type="text"
                name="identification"
                value={values.identification}
                onChange={handChangeInput}
                placeholder="Vui lòng nhập Cmnd/Cccd..."
              />
            </div>
          </div>
          {/* TELEPHONE */}
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Số điện thoai :*</label>
              <input
                type="text"
                name="telephone"
                value={values.telephone}
                placeholder="Vui lòng nhập Số điện thoai..."
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* Address */}
          <div className="newModalManager__group">
            <div className="newModalManager__group--second">
              <label>Địa chỉ :*</label>
              <input
                type="text"
                value={values.address}
                placeholder="Vui lòng nhập Địa chỉ..."
                name="address"
                onChange={handChangeInput}
              />
            </div>
          </div>
          {/* name */}
          <div className="newModalManager__group">
            <div className="newModalManager__group--btn">
              <button onClick={handleSubmit}>Xác nhận</button>
              <button onClick={handleClosenew}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewModalManager.propTypes = {};

export default NewModalManager;
