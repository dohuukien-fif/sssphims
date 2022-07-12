import axios from "axios";
import React from "react";
import LoadingFileImage from "../../../component/Loading/loadingFileImage";
import "./styles.scss";
const NewMovieFeatures = ({
  newMovieRef,
  isNewMovie,
  onSubmits,
  handleIsCloseNewMovie,
}) => {
  const [values, setValue] = React.useState({
    name: "",
    vietsub: "",
    searchTerm: "",
    director: "",
    practice: "",
    time: "",
    desTrailer: "",
    year: "",
    hd: "",
    description: "",
  });
  const [valueMovie, setValueMovie] = React.useState({
    pratice: "",
    video: "",
  });
  const [movie, setMovie] = React.useState([]);
  const [fileImage, setFileImages] = React.useState("");
  const [file, setFile] = React.useState();
  const [LoadingfileImage, setLoadingfileImage] = React.useState(false);
  const [infor, setInfor] = React.useState({
    categoryName: "",
    nation: "",
    category: [],
    cast: [],
  });

  const inforMovie = [
    {
      title: "Mặc đinh ",
      content: ["Phim lẻ", "Phim anime", "Phim cinemer", "Phim bộ"],
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
      name: "cast",
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
      name: "cast",
      title: "Diễn viên",
      nation: "Hàn quốc",
      data: ["kim kwang soo", "huu "],
    },
    {
      name: "cast",
      title: "Diễn viên",
      nation: "Nhật bản",
      data: ["ki mo ci", "huu khang"],
    },
    {
      name: "cast",
      title: "Diễn viên",
      nation: "Mỹ",
      data: ["join", "huu khang"],
    },
    {
      name: "cast",
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
  const handleChangeMovie = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setValueMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmitMovie = () => {
    setMovie((prev) => [...prev, valueMovie]);
    setValueMovie({
      pratice: "",
      video: "",
    });
  };
  const handleChangeInfor = (name, value) => {
    if (infor[name]?.includes(value)) return console.log("có rùi");

    setInfor((prev) => ({
      ...prev,
      [name]: Array.isArray(infor[name]) ? [...infor[name], value] : value,
    }));
  };
  const date = new Date();
  const dayBroveMovie = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  console.log(
    dayBroveMovie,
    date.getDate(),
    date.getMonth(),
    date.getFullYear()
  );
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
    if (movie.length === 0) {
      return console.log("vui lòng nhập tập  phim");
    }
    if (
      Object.values(infor).includes("") ||
      Object.values(infor).length === 0
    ) {
      return console.log("vui lòng kiểm tra thông tins");
    }
    if (Object.values(values).includes("")) {
      return console.log("vui lòng kiểm tra thông tin");
    }
    if (movie.length === 0) {
      return console.log("vui lòng nhập tập  phim");
    }
    if (onSubmits) {
      const newValue = {
        ...values,
        image: fileImage,
        movie,
        date: dayBroveMovie,
        ...infor,
      };

      await onSubmits(newValue);
    }

    setMovie([]);
    setInfor({ categoryName: "", nation: "", category: [], cast: [] });
    setValue({
      name: "",
      vietsub: "",
      searchTerm: "",
      director: "",
      practice: "",
      time: "",
      desTrailer: "",
      year: "",
      hd: "",
      description: "",
    });
    setFileImages("");
  };
  console.log(Array.isArray(Object.values(infor)));

  console.log("[values]", values);
  console.log("[infor]", infor);

  console.log("[valuemovie]", valueMovie);
  console.log("[movie]", movie);

  const getDataCast = dataCast.filter((e) =>
    infor.nation !== "" ? e.nation === infor.nation : ""
  );

  console.log("[getDataCast[", getDataCast);

  return (
    <div
      className={isNewMovie ? "newMovie active--newMovie" : "newMovie"}
      ref={newMovieRef}
    >
      <div className="newMovie__swap">
        {/*   newMovie TOP */}

        <div className="newMovie__top">
          <div className="newMovie__top--left">
            <span>Tập phim</span>
          </div>
          <div className="newMovie__top--right">
            <span>Ngày</span>
            <span>{dayBroveMovie}</span>
          </div>
        </div>
        {/*   newMovie BODY */}
        <div className="newMovie__body">
          {/*      TÊN  PHIM   */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Tên phim </label>
              <input
                type="text"
                placeholder="Nhập tên phim..."
                value={values.name}
                name="name"
                onChange={handleChangeInput}
              ></input>
            </div>

            <div className="newMovie__group--second">
              <label>Tên Vietsub </label>
              <input
                type="text"
                placeholder="Nhập tên vietsub..."
                name="vietsub"
                value={values.vietsub}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*   SEARCH */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Tên tìm kiếm </label>
              <input
                type="text"
                placeholder="Nhập tên tìm kiếm..."
                name="searchTerm"
                value={values.searchTerm}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*   director */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Tên Giảm đốc </label>
              <input
                type="text"
                placeholder="Nhập tên giám đốc..."
                name="director"
                value={values.director}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*   prcatice */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Số tập </label>
              <input
                type="text"
                placeholder="Nhập số  tập..."
                name="practice"
                value={values.practice}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*   time */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>thời gian </label>
              <input
                type="text"
                placeholder="Nhập thời gian /tập..."
                name="time"
                value={values.time}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/* MOVIE -  MENU - NATION - CAST - DIRETOR */}
          <div className="newMovie__group newMovie--infor">
            {inforMovie.map((item, index) => (
              <div className="newMovie__group--second">
                <p>{item.title}</p>
                <ul>
                  {item.content.map((items, idx) => (
                    <li
                      className={
                        infor[item?.name]?.includes(items)
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
            {getDataCast.length > 0 ? (
              <>
                {getDataCast?.map((item, index) => (
                  <div className="newMovie__group--second">
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
              <div className="newMovie__group--second">
                <p>Diễn viên</p>
                <span>Vui lòng chọn quốc gia</span>
              </div>
            )}
          </div>

          {/*   IMAGE */}
          <div className="newMovie__group--image">
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
          {/*   Trailer */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Trailer </label>
              <input
                type="text"
                placeholder="Nhập Link Trailer..."
                name="desTrailer"
                value={values.desTrailer}
                onChange={handleChangeInput}
              ></input>
            </div>
          </div>
          {/*  YEAR -  FULL HD  -  PRACTI */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Năm sản xuât </label>
              <input
                type="text"
                placeholder="Nhập năm sản xuất..."
                name="year"
                value={values.year}
                onChange={handleChangeInput}
              ></input>
            </div>

            <div className="newMovie__group--second">
              <label>Chất lượng phim</label>
              <input
                type="text"
                placeholder="Nhập chất lượng phim.."
                name="hd"
                value={values.hd}
                onChange={handleChangeInput}
              ></input>
            </div>

            {/* <div className="newMovie__group--second">
              <label>Số tập </label>
              <input
                type="text"
                value={
                  Object.keys(dataItem).length > 0 &&
                  dataItem?.movie[dataItem?.movie?.length - 1].pratice
                }
              ></input>
            </div> */}
          </div>
          {/*   Movie */}
          <div className="newMovie__group--movie ">
            <div className="newMovie__group--second">
              <label>Movie</label>
              <input
                type="text"
                name="pratice"
                value={valueMovie.pratice}
                placeholder="Nhập số tập"
                onChange={handleChangeMovie}
              />
            </div>
            <div className="newMovie__group--second">
              <input
                type="text"
                name="video"
                value={valueMovie.video}
                placeholder="nhập link tập"
                onChange={handleChangeMovie}
              />
              <button onClick={handleSubmitMovie}> Submit</button>
            </div>
          </div>

          {/*   LIST   MOVIE */}
          <div className="newMovie__group--list">
            {movie?.map((item, index) => (
              <div className="newMovie__group--item">
                <div className="newMovie__group--pratice">
                  <span>Tập :</span>
                  <span>{item.pratice}</span>
                </div>
                <div className="newMovie__group--link">
                  <span>Link :</span>
                  <span>{item.video}</span>
                </div>
              </div>
            ))}
          </div>

          {/*   DESCRIPTION */}
          <div className="newMovie__group">
            <div className="newMovie__group--second">
              <label>Mô tả</label>
              <textarea
                id=""
                name="description"
                value={values.description}
                onChange={handleChangeInput}
              ></textarea>
            </div>
          </div>
          {/*   btn */}
          <div className="newMovie__group">
            <div className="newMovie__group--btn">
              <button onClick={handleSubmit}>Đồng ý</button>
              <button onClick={handleIsCloseNewMovie}>Đóng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewMovieFeatures.propTypes = {};

export default NewMovieFeatures;
