import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
FooterFeature.propTypes = {};

function FooterFeature(props) {
  return (
    <div className="footer">
      <div className="footer_container">
        <ul className="footerLisst">
          <li className="footer_item">Liên hệ</li>
          <li className="footer_item">Giới thiệu</li>
          <li className="footer_item">Bản quyền</li>
        </ul>
        <ul className="footerLisst">
          <li className="footer_item">Phim Bộ</li>
          <li className="footer_item">Phim Lẻ</li>
          <li className="footer_item">Phim Chiếu Rạp</li>
        </ul>
        <ul className="footerLisst">
          <li className="footer_item">
            <AiOutlineFacebook
              style={{ marginLeft: "10px", color: "yellow" }}
            />{" "}
            <span style={{ marginLeft: "8px" }}> Facebook</span>
          </li>
          <li className="footer_item">
            {" "}
            <AiOutlineTwitter
              style={{ marginLeft: "10px", color: "yellow" }}
            />{" "}
            <span style={{ marginLeft: "8px" }}> Twitter</span>
          </li>
          <li className="footer_item">
            <AiOutlineInstagram
              style={{ marginLeft: "10px", color: "yellow" }}
            />
            <span style={{ marginLeft: "8px" }}> Instagram</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterFeature;
