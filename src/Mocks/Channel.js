export const Channel = [...Array(4).keys()].map((i) => ({
  image: [
    '//laz-img-cdn.alicdn.com/images/ims-web/TB1CkdwhRr0gK0jSZFnXXbRRXXa.png',
    '//laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png',
    '//laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png',
    '//laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png',
  ][i],
  name: ['LazMall', 'Mã Giảm Giá', 'Nạp Thẻ & eVoucher', 'LazGlobal'][i],
  colorFont: ['red', 'orange', 'blue', 'violet'][i],
}));
