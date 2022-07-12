import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import axios from "axios";
import LoadingFileImage from "../../../../component/Loading/loadingFileImage";
const MovieUpdate = ({
  dataItem,
  isUpdate,
  updateRef,
  onSubmits,
  handleIsCloseUpdate,
}) => {
  const [values, setValue] = React.useState({});
  const [fileImage, setFileImages] = React.useState("");
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const [infor, setInfor] = React.useState({
    categoryName: "",
    nation: "",
    category: [],
    cast: [],
  });

  console.log(dataItem.categoryName);
  console.log(dataItem.nation);
  const inforMovie = [
    {
      title: "Mặc đinh ",
      content: ["Phim lẻ", "Phim anime", "Phim cinemer", "Phim Bộ"],
      name: "categoryName",
    },
    {
      name: "category",
      title: "Danh mục ",
      content: [
        "Phim hành động",
        "Phim cổ trang",
        "Phim tình cảm",
        "Phim kịnh dị",
        "Phim tâm lý - tình cảm",
        "Phim hoạt hình",
      ],
    },
    {
      name: "nation",
      title: "Quốc gia ",
      content: ["Việt nam", "Trung quốc", "Nhật bản", "Hàn quốc", "Mỹ"],
    },
  ];
  const dataCast = [
    {
      name: "category",
      title: "Diễn viên",
      nation: "Trung quốc",
      data: [
        "triệu lệ dĩnh",
        "Dương dương",
        "Chirs event",
        "Trương tuấn trang",
      ],
    },

    {
      name: "category",
      title: "Diễn viên",
      nation: "Hàn quốc",
      data: ["kim kwang soo", "huu "],
    },
    {
      name: "category",
      title: "Diễn viên",
      nation: "Nhật bản",
      data: ["ki mo ci", "huu khang"],
    },
    {
      name: "category",
      title: "Diễn viên",
      nation: "Mỹ",
      data: ["join", "huu khang"],
    },
    {
      name: "category",
      title: "Diễn viên",
      nation: "Việt nam",
      data: ["huuu kien", "huu khang"],
    },
  ];
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeInfor = (name, value) => {
    if (infor[name].includes(value)) return console.log("có rùi");

    setInfor((prev) => ({
      ...prev,
      [name]: Array.isArray(infor[name]) ? [...infor[name], value] : value,
    }));
  };
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
  const handleSubmit = async () => {
    const newInfor = {
      categoryName: infor.categoryName || dataItem.categoryName,
      nation: infor.nation || dataItem.nation,
      category: infor.category.length > 0 ? infor.category : dataItem.category,
      cast: infor.cast.length > 0 ? infor.cast : dataItem.cast,
      thumbnailUrl: fileImage !== "" ? fileImage : dataItem.thumbnailUrl,
    };
    await onSubmits({ ...values, id: dataItem.id, ...newInfor });
    setFileImages("");
  };
  console.log();

  console.log("[values]", values);
  console.log("[infor]", infor);
  const getDataCast = dataCast.filter((e) =>
    infor.nation !== "" ? e.nation === infor.nation : ""
  );
  return (
    <div
      className={isUpdate ? "update active--update" : "update"}
      ref={updateRef}
    >
      <div className="update__swap">
        {/*   UPDATE TOP */}

        <div className="update__top">
          <div className="update__top--left">
            <span>Tập phim</span>
          </div>
          <div className="update__top--right">
            <span>Tập</span>
            <span>
              {Object.keys(dataItem).length > 0 &&
                dataItem?.movie[dataItem?.movie?.length - 1].pratice}
            </span>
          </div>
        </div>
        {/*   UPDATE BODY */}
        <div className="update__body">
          {/*      TÊN  PHIM   */}
          <div className="update__group">
            <div className="update__group--second">
              <label>Tên phim </label>
              <input
                type="text"
                placeholder={dataItem.name}
                name="name"
                onChange={handleChangeInput}
              ></input>
            </div>

            <div className="update__group--second">
              <label>Tên Vietsub </label>
              <input
                type="text"
                placeholder="Nhập tên vietsub..."
                name="vietsub"
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*   SEARCH */}
          <div className="update__group">
            <div className="update__group--second">
              <label>Tên tìm kiếm </label>
              <input
                type="text"
                placeholder={dataItem.name}
                name="searchTerm"
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/* MOVIE -  MENU - NATION - CAST - DIRETOR */}
          <div className="update__group update--infor">
            {inforMovie.map((item, index) => (
              <div className="update__group--second">
                <p>{item.title}</p>
                <ul>
                  {item.content.map((items, idx) => (
                    <li
                      className={
                        infor[item.name].includes(items) ? "active--infor" : ""
                      }
                      onClick={() => handleChangeInfor(item.name, items)}
                    >
                      {items}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {getDataCast.length > 0 ? (
              <>
                {getDataCast?.map((item, index) => (
                  <div className="update__group--second">
                    <p>{item.title}</p>
                    <ul>
                      {item.data.map((items, idx) => (
                        <li
                          className={
                            infor[item.name].includes(items)
                              ? "active--infor"
                              : ""
                          }
                          onClick={() => handleChangeInfor(item.name, items)}
                        >
                          {items}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            ) : (
              <div className="update__group--second">
                <p>Diễn viên</p>
                <span>Vui lòng chọn quốc gia</span>
              </div>
            )}
          </div>
          {/*   IMAGE */}
          <div className="update__group--image">
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
          {/*   Trailer */}
          <div className="update__group">
            <div className="update__group--second">
              <label>Trailer </label>
              <input
                type="text"
                placeholder={dataItem.desTrailer}
                name="desTrailer"
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*  YEAR -  FULL HD  -  PRACTI */}
          <div className="update__group">
            <div className="update__group--second">
              <label>Năm sản xuât </label>
              <input
                type="text"
                placeholder={dataItem.date}
                name="year"
                onChange={handleChangeInput}
              ></input>
            </div>

            <div className="update__group--second">
              <label>Thời gian</label>
              <input
                type="text"
                placeholder={dataItem.time}
                name="time"
                onChange={handleChangeInput}
              ></input>
            </div>

            <div className="update__group--second">
              <label>Số tập </label>
              <input
                type="text"
                value={
                  Object.keys(dataItem).length > 0 &&
                  dataItem?.movie[dataItem?.movie?.length - 1].pratice
                }
              ></input>
            </div>
          </div>
          {/*   DESCRIPTION */}
          <div className="update__group">
            <div className="update__group--second">
              <label>Mô tả</label>
              <textarea
                id=""
                name="description"
                onChange={handleChangeInput}
              ></textarea>
            </div>
          </div>
          {/*   btn */}
          <div className="update__group">
            <div className="update__group--btn">
              <button onClick={handleSubmit}> Đồng ý</button>
              <button onClick={handleIsCloseUpdate}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieUpdate.propTypes = {};

export default MovieUpdate;
