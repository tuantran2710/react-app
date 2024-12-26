import { memo } from "react";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-col-g1">
            <div className="head">ĐỊA CHỈ</div>
            <div>
              <b> Trụ sở chính:</b> Công ty Cổ Phần Phúc Long Heritage - ĐKKD:
              0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
            </div>
            <div>
              <b>Nhà máy:</b> D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III,
              phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam.
            </div>
            <div>
              <b>Địa chỉ:</b> Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê
              Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh.
            </div>
            <div>Hotline Đặt hàng: 1800 6779</div>
            <div>
              <b>Hotline Công ty:</b> 1900 2345 1B (Bấm phím 0: Lễ Tân | phím 1:
              CSKH)
            </div>
            <div>
              <b>Email:</b> sales@phuclong.masanroup.com,
              info2@phuclong.masanroup.com
            </div>
          </div>
          <div className="container-g2">
            <div className="footer-col-g2">
              {/* Item CÔNG TY*/}
              <div className="item">
                <div className="head">CÔNG TY</div>
                <div className="body">
                  <a href="#">
                    <div>Giới thiệu về chúng tôi</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Thư viện hình ảnh</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Liên hệ</div>
                  </a>
                </div>
              </div>
              {/* Item TUYỂN DỤNG*/}
              <div className="item">
                <div className="head">TUYỂN DỤNG</div>
                <div className="body">
                  <a href="#">
                    <div>HTCH</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Kiosk</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Văn phòng</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Nhà máy</div>
                  </a>
                </div>
              </div>
              {/* Item HỘI VIÊN*/}
              <div className="item">
                <div className="head">HỘI VIÊN</div>
                <div className="body">
                  <a href="#">
                    <div>Câu hỏi thường gặp (FAQ)</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Điều khoản và điều kiện chương trình hội viên</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Điều khoản & Điều kiện Thẻ trả trước</div>
                  </a>
                </div>
              </div>
              {/* Item LIÊN HỆ*/}
              <div className="item">
                <div className="head">LIÊN HỆ</div>
                <div className="body">
                  <a href="#">
                    <div>Liên hệ</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-col-g3">
              {/* Item KHUYẾN MÃI*/}
              <div className="item">
                <div className="head">KHUYẾN MÃI</div>
                <div className="body">
                  <a href="#">
                    <div>Tin khuyến mãi</div>
                  </a>
                </div>
              </div>
              {/* Item CỬA HÀNG*/}
              <div className="item">
                <div className="head">CỬA HÀNG</div>
                <div className="body">
                  <a href="#">
                    <div>Danh sách cửa hàng</div>
                  </a>
                </div>
              </div>
              {/* Item ĐIỀU KHOẢN SỬ DỤNG*/}
              <div className="item">
                <div className="head">ĐIỀU KHOẢN SỬ DỤNG</div>
                <div className="body">
                  <a href="#">
                    <div>Chính sách bảo mật thông tin</div>
                  </a>
                </div>
                <div className="body">
                  <a href="#">
                    <div>Chính sách đặt hàng</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>© Công ty CP Phúc Long Heritage 2024</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-youtube"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
