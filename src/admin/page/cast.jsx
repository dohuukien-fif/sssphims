import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./cast.scss";
import { AiFillEye } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import ModalCast from "../component/cast/modal";
import CastList from "../component/cast/managerList";
import ModalUpdate from "../component/cast/modalUpdate";
import FilterNation from "../component/cast/filter";
const datas = [
  {
    nation: "Mỹ",
    id: 1,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-1-16428322419461750361607.jpeg",
    name: "Alexandra Daddario",
    description:
      "Nữ diễn viên kiêm YouTuber người Mỹ 35 tuổi đã xuất hiện trong các bộ phim như Percy Jackson và Baywatch. Đôi mắt xanh của cô ấy đã hớp hồn tất cả những người hâm mộ.",
  },
  {
    nation: "Mỹ",
    id: 2,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-2-16428322502531060913935.jpeg",
    name: "Amy Adams",
    description:
      "Nữ diễn viên 47 tuổi người Mỹ lọt vào danh sách này nhờ vẻ đẹp không thể chê vào đâu được. Cô đã tham gia các bộ phim hài, hành động và hồi hộp như: Enchanted, American Hustle và Nocturnal Animals",
  },
  {
    nation: "Mỹ",
    id: 3,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-1-16428322419461750361607.jpeg",
    name: "Alexandra Daddario",
    description:
      "Nữ diễn viên kiêm YouTuber người Mỹ 35 tuổi đã xuất hiện trong các bộ phim như Percy Jackson và Baywatch. Đôi mắt xanh của cô ấy đã hớp hồn tất cả những người hâm mộ.",
  },
  {
    nation: "Mỹ",
    id: 4,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-4-16428322507671004991561.jpeg",
    name: "Ana de Armas",
    description:
      "Nữ diễn viên người Tây Ban Nha gốc Cuba đã xuất hiện trong các bộ phim của Hollywood như Dark Desire hay Blade Runner 2049.",
  },
  {
    nation: "Mỹ",
    id: 5,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-1-16428322419461750361607.jpeg",
    name: "Alexandra Daddario",
    description:
      "Nữ diễn viên kiêm YouTuber người Mỹ 35 tuổi đã xuất hiện trong các bộ phim như Percy Jackson và Baywatch. Đôi mắt xanh của cô ấy đã hớp hồn tất cả những người hâm mộ.",
  },
  {
    nation: "Mỹ",
    id: 6,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-1-16428322419461750361607.jpeg",
    name: "Alexandra Daddario",
    description:
      "Nữ diễn viên kiêm YouTuber người Mỹ 35 tuổi đã xuất hiện trong các bộ phim như Percy Jackson và Baywatch. Đôi mắt xanh của cô ấy đã hớp hồn tất cả những người hâm mộ.",
  },
  {
    nation: "Mỹ",
    id: 7,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-6-16428322492811352731490.jpeg",
    name: "Angelina Jolie",
    description:
      "Một trong những người đẹp được biết đến nhiều nhất nhờ tài năng, sức hấp dẫn và trí thông minh là nữ diễn viên đã đóng vai Lara Croft trong Tomb Raider, Maleficent và Ete,....",
  },
  {
    id: 8,
    nation: "Mỹ",
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-8-16428322487491206942876.jpeg",
    name: "Anne Hathaway",
    description:
      "Chúng ta đã từng thấy nữ diễn viên 39 tuổi người Mỹ đoạt giải Oscar trong các bộ phim như Les Miserables, The Devil Wears Fashionist hay The Princess Diaries.",
  },
  {
    nation: "Mỹ",
    id: 9,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-10-1642832248798468850414.jpeg",
    name: "Anya Taylor-Joy",
    description:
      "Nữ diễn viên kiêm người mẫu Mỹ - Anh đã từng chiến thắng Quả cầu vàng, các đề cử khác nhau cho giải BAFTA, trong các bộ phim và loạt phim như Fragmented, Lady's Gambit hay Morgan.",
  },
  {
    id: 10,
    nation: "Mỹ",
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-12-16428322508312039090763.jpeg",
    name: " Chloe Grace Moretz",
    description:
      "Nữ diễn viên kiêm người mẫu 24 tuổi người Mỹ này đã trở thành một trong những gương mặt được công chúng yêu thích nhất suốt một thời gian. Chúng ta đã từng thấy cô ấy trong các tác phẩm như Kick-ass, Carrie hay The Fifth Wave",
  },
  {
    nation: "Mỹ",
    id: 11,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-14-1642832250316957650114.jpeg",
    name: " Elizabeth Olsen",
    description:
      "Nữ diễn viên 32 tuổi đã nổi đình nổi đám sau khi tham gia các bộ phim như Avengers, khi thủ vai nàng Scarlet Witch",
  },
  {
    nation: "Trung quốc",
    id: 13,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-16-16428322498102057140875.png",
    name: " Emma Roberts",
    description:
      "Cô là một nữ diễn viên và ca sĩ người Mỹ 30 tuổi, và đã có màn trình diễn tuyệt vời trong American Horror, hay Nerve và Scream 4",
  },
  {
    nation: "Việt nam",
    id: 15,
    image:
      "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2022/1/22/photo-20-16428322483841751496689.jpeg",
    name: "  Emma Watson",
    description:
      "Nữ diễn viên kiêm người mẫu người Anh nhưng sinh ra ở Pháp 31 tuổi này đã nổi tiếng nhờ vai Hermione trong câu chuyện hoàn chỉnh của Harry Potter.",
  },
];
const CastFeatures = (props) => {
  const [data, setdata] = React.useState(datas);
  const [isOpen, setIsopen] = React.useState(false);
  const [isOpenUpdate, setIsopenUpdate] = React.useState(false);
  const [inforData, setinforData] = React.useState({});

  const newModalRef = useRef(null);
  const updateModalRef = useRef(null);

  const handleIsopen = () => {
    setIsopen(true);
  };
  const handleIsClose = () => {
    setIsopen(false);
  };
  const handleIsopenUpdate = () => {
    setIsopenUpdate(true);
  };
  const handleIsCloseUpdate = () => {
    setIsopenUpdate(false);
  };
  const handleSubmitValue = async (value) => {
    console.log("[valuenewđákdakdkhá]", value);
  };

  const handleSubmitValueUpdate = async (value) => {
    console.log("value", value);
  };
  const handleGetIdData = (id) => {
    console.log("id", id);

    setinforData(data.find((e) => e.id === id));

    setIsopenUpdate(true);
  };

  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === updateModalRef.current) {
        setIsopenUpdate(false);
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);
  useEffect(() => {
    const hanndleWindowClose = (e) => {
      if (e.target === newModalRef.current) {
        setIsopen(false);
      }
    };
    window.addEventListener("click", hanndleWindowClose);

    return () => window.removeEventListener("click", hanndleWindowClose);
  }, []);

  const handleChangeValueNation = (value) => {
    setdata(datas.filter((e) => e.nation === value));
    console.log(value);
  };

  console.log(data);

  return (
    <div className="cast">
      <div className="cast__btn">
        <FilterNation onSubmits={handleChangeValueNation} />
        <div className="cast__btn--create">
          <button onClick={handleIsopen}>
            Thêm
            <BsPlusLg />
          </button>
        </div>
      </div>

      <div className="cast__swap">
        {data.length === 0 ? (
          <h1>Không có diễn viên </h1>
        ) : (
          <CastList data={data} handleGetIdData={handleGetIdData} />
        )}
      </div>

      <ModalCast
        newModalRefs={newModalRef}
        isOpen={isOpen}
        handleIsClose={handleIsClose}
        onSubmits={handleSubmitValue}
        data={inforData}
      />
      <ModalUpdate
        updateModalRefs={updateModalRef}
        isOpen={isOpenUpdate}
        handleIsClose={handleIsCloseUpdate}
        onSubmits={handleSubmitValueUpdate}
        data={inforData}
      />
    </div>
  );
};

CastFeatures.propTypes = {};

export default CastFeatures;
