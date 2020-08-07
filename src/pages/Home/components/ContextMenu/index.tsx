import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from 'actions/cart';
import ContextMenuButton from 'pages/Home/atom/ContextMenuButton';

interface Props {
  productId: string;
  parentRef: any;
}
const ContextMenu: React.FC<Props> = ({ parentRef, productId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    const showMenu = (event: MouseEvent) => {
      event.preventDefault();
      setIsVisible(true);
      setX(event.clientX);
      setY(event.clientY);
    };
    const closeMenu = () => {
      setIsVisible(false);
    };

    parent.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu);
    window.addEventListener('auxclick', closeMenu);
    window.addEventListener('scroll', closeMenu);

    return function cleanup() {
      parent.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
      window.removeEventListener('auxclick', closeMenu);
      window.removeEventListener('scroll', closeMenu);
    };
  });

  const style = {
    top: y,
    left: x,
  };

  const handleBuyProduct = () => {
    console.log('chua mua dc :>> ');
  };

  const handleAddToCart = (productId: string) => {
    try {
      const action = addToCart(productId, 1);
      dispatch(action);
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  return isVisible ? (
    <div className='context-menu' style={style}>
      <ContextMenuButton
        content='Mua ngay'
        handleClick={handleBuyProduct}
        productId={productId}
      />
      <ContextMenuButton
        content='Thêm vào giỏ hàng'
        handleClick={handleAddToCart}
        productId={productId}
      />
    </div>
  ) : null;
};

export default ContextMenu;
