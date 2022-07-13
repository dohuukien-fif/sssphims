import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ManagerList from "../component/manager/managerList";
import "./manager.scss";
import ModalManager from "../component/manager/modal";
import NewModalManager from "../component/manager/newManager";
import ManagerApi from "../../api/manager";
const Director = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState({});
  const [datas, setData] = useState(
    JSON.parse(localStorage.getItem("MANAGER")) || []
  );
  const [isOpenNew, setIsOpenNew] = useState(false);
  const newModalRef = useRef(null);
  const updateModalRef = useRef(null);
  useEffect(() => {
    const fetchApi = async () => {
      const reponse = await ManagerApi.getAll();

      setData(reponse);
    };
    fetchApi();
  }, []);
  const data = [
    {
      id: 1,
      userName: "huukien",
      gender: "name",
      birthDay: "08/03/2000",
      position: "nhân viên",
      identification: "212813496",
      telephone: "0969757507",
      address: "duc hoa-mo duc-quan  ngai",
    },
    {
      id: 22,
      userName: "huukien",
      gender: "name",
      birthDay: "08/03/2000",
      position: "nhân viên",
      identification: "212813496",
      telephone: "0969757507",
      address: "duc hoa-mo duc-quan  ngai",
    },
    {
      id: 3,
      userName: "huukien",
      gender: "name",
      birthDay: "08/03/2000",
      position: "nhân viên",
      identification: "212813496",
      telephone: "0969757507",
      address: "duc hoa-mo duc-quan  ngai",
    },
  ];
  ///open

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleOpennew = () => {
    setIsOpenNew(true);
  };
  const handleClosenew = () => {
    setIsOpenNew(false);
  };
  const handleIdModal = async (id) => {
    await ManagerApi.get(id);
    setIsOpen(true);
  };

  const handleOnSunmitValue = async (value) => {
    console.log("huukiendeupdat", value);
    await ManagerApi.update(value);
    setIsOpen(false);
    window.location.reload();
  };
  const handleOnSunmitValueNew = async (value) => {
    console.log("handleOnSunmitValue", value);

    await ManagerApi.add(value);

    setIsOpenNew(false);
    window.location.reload();
  };

  console.log("data", datas);

  const handleDelete = async (id) => {
    await ManagerApi.detele(id);

    console.log("idDelete", id);
    window.location.reload();
  };

  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === updateModalRef.current) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);
  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === newModalRef.current) {
        setIsOpenNew(false);
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);

  console.log("datannnnnnnnnnEW", datas);
  return (
    <div className="manager">
      <div className="manager__btn">
        <button onClick={handleOpennew}>Thêm mới</button>
      </div>
      {datas.length > 0 && (
        <div className="manager__swap">
          <div className="manager__title">
            <span>Nhân viên</span>
          </div>

          <div className="manager__table">
            <div className="manager__top">
              <div className="manager__top--left">
                <span>Name</span>
                <span>Giới tính</span>
                <span>Ngày sinh</span>
                <span>Chức vụ</span>
                <span>Cmnd/Cccc</span>
                <span>Số điện thoại</span>
              </div>
              <div className="manager__top--right">
                <span>Địa chỉ</span>
                <span>Action</span>
              </div>
            </div>
            <ManagerList
              data={datas}
              handleIdModal={handleIdModal}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      )}

      <ModalManager
        isOpens={isOpen}
        data={update}
        updateModalRef={updateModalRef}
        onSubmits={handleOnSunmitValue}
      />
      <NewModalManager
        newModalRef={newModalRef}
        isOpens={isOpenNew}
        onSubmits={handleOnSunmitValueNew}
        handleClosenew={handleClosenew}
      />
    </div>
  );
};

Director.propTypes = {};

export default Director;
