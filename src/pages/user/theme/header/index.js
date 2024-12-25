import { memo } from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-6">Left</div>
          <div className="col-6 top_right">Right</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
