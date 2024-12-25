import { memo } from "react";
import "./style.scss";
import { CircleUser } from "lucide-react";
import { Mail } from "lucide-react";
const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src="logo.png" alt="" />
      </div>

      {/* Search bar */}
      <div className="header-search">
        <input type="text" placeholder="Bạn muốn mua gì..." />
      </div>

      {/* Delivery method */}
      <div className="header-delivery">
        <img src="delivery.png" alt="" />
        <span>Chọn Phương Thức Nhận Hàng</span>
      </div>

      {/* Icons */}
      <div className="header-icons">
        <CircleUser />
        <Mail />
      </div>
    </div>
  );
};

export default memo(Header);
