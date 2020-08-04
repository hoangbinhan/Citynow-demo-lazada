import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from 'actions/cart';

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
      <button className='context-menu__btn' onClick={handleBuyProduct}>
        Mua ngay
      </button>
      <button
        className='context-menu__btn'
        onClick={() => handleAddToCart(productId)}
      >
        Thêm vào giỏ
      </button>
    </div>
  ) : null;
};

export default ContextMenu;
