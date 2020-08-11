export const ScrollControlData = [...Array(5).keys()].map((i) => ({
  icon: [
    'fas fa-fire',
    'fas fa-clock',
    'fab fa-canadian-maple-leaf',
    'fas fa-list',
    'fas fa-portrait',
  ][i],
  content: [
    'Deal Chớp Nhoáng',
    'Tìm Kiếm Phổ Biến',
    'LazMall',
    'Danh Mục Ngành Hàng',
    'Dành Riêng Cho bạn',
  ][i],
  id: [
    '#ScrollControl-Deal',
    '#ScrollControl-Popular',
    '#ScrollControl-Collection',
    '#ScrollControl-LazMall',
    '#ScrollControl-Categories',
  ][i],
}));
