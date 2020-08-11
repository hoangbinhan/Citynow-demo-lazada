import React from 'react';
import './style.scss';
import InnerWidth1 from '../InnerWidth1';
import InnerWidth2 from '../InnerWidth2';

const inner_width_1_first = {
  title: 'LIÊN HỆ VỚI LAZADA',
  list: [
    'Thứ 2 đến CN: 9h - 18h (Hotline), 7h - 22h (chat trực tuyến)',
    'Trung tâm hỗ trợ',
    'Hướng dẫn đặt hàng',
    'Giao hàng & Nhận hàng',
    'Chính sách hàng nhập khẩu',
    'Hướng dẫn đổi trả hàng',
  ],
};
const inner_width_1_second = {
  title: 'LAZADA VIỆT NAM',
  list: [
    'Về Lazada Việt Nam',
    'Bán hàng cùng Lazada',
    'Chương trình Lazada Afﬁliate',
    'Tuyển dụng',
    'Điều khoản mua bán hàng hóa',
    'Chính sách bảo mật',
    'Báo chí',
    'Bảo vệ quyền sở hữu trí tuệ',
    'Quy chế hoạt động sàn Lazada',
    'Điều Khoản Công Cụ Tương Tác',
  ],
};

const inner_width_2 = {
  download: {
    icon:
      'https://laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png',
    title: 'Go where your heart beats',
    description: 'Tải App Lazada',
    appStore:
      'https://pluspng.com/img-png/download-on-app-store-png-download-1272.png',
    googlePlay:
      'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
  },
  supplement: {
    first: 'CÔNG TY TNHH RECESS',
    second:
      'Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.',
    third:
      'Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM',
    fourth:
      'Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.',
  },
};

const Inner: React.FC = (props) => {
  return (
    <div className='footerFirst__inner'>
      <InnerWidth1
        title={inner_width_1_first.title}
        list={inner_width_1_first.list}
      />
      <InnerWidth1
        title={inner_width_1_second.title}
        list={inner_width_1_second.list}
      />
      <InnerWidth2
        download={inner_width_2.download}
        supplement={inner_width_2.supplement}
      />
    </div>
  );
};

export default Inner;
