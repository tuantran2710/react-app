import { memo } from "react";
import "./style.scss";
import { CircleUser } from "lucide-react";
import { Mail } from "lucide-react";
import LOGO from "../../../../images/logoPL.png";
import DELIVERY from "../../../../images/delivery.png";
import { Search } from "lucide-react";
const Header = () => {
  return (
    <>
      <div className="header">
        {/* Logo */}
        <div className="header-logo">
          <img src={LOGO} alt="" />
        </div>

        {/* Search bar */}
        <div className="header-search">
          <span className="search-icon">
            <Search />
          </span>
          <input
            className="outColor"
            type="text"
            placeholder="Bạn muốn mua gì..."
          />
        </div>

        {/* Delivery method */}
        <div className="header-delivery">
          <img src={DELIVERY} alt="" />
          <span>Chọn Phương Thức Nhận Hàng</span>
        </div>

        {/* Icons */}
        <div className="header-icons">
          <Mail />
          <CircleUser />
        </div>
      </div>
      <div className="head-menu">
        <div className="menu-container">
          <div className="box-menu">
            <ul className="main-menu">
              <li>
                <a href="">TRANG CHỦ</a>
              </li>
              <li>
                <a href="">MENU</a>
              </li>
              <li>
                <a href="">SẢN PHẢM ĐÓNG GÓI</a>
              </li>
              <li>
                <a href="">VỀ CHÚNG TÔI</a>
              </li>
              <li>
                <a href="">KHUYẾN MÃI</a>
              </li>
              <li>
                <a href="">HỘI VIÊN</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
