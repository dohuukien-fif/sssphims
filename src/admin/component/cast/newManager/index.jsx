import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
const NewModalManager = ({ isOpens, data, onSubmits, handleClosenew }) => {
  const [error, setError] = useState("");
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
  const handleSubmit = async () => {
    if (Object.values(values).includes("")) {
      return setError("vui lòng  nhập   đầy đủ   thông tin");
    }

    if (onSubmits) {
      await onSubmits({ ...values, id });
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
  };

  console.log("values", error);
  console.log("values", values);
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setError("");
    }, 2000);

    return () => clearTimeout(timeInterval);
  }, [error]);
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
                placeholder="Vui lòng nhập tên bạn..."
                onChange={handChangeInput}
              />
            </div>
            <div className="newModalManager__group--second">
              <label>Giới tính :*</label>
              <div className="newModalManager__group--grende">
                <span>Name</span>
                <input
                  type="radio"
                  value="name"
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
