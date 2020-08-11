import React from 'react';
import './style.scss';
import { addToCart } from 'actions/cart';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
interface Props {
  quantity: number;
}

const ButtonAddToCart: React.FC<Props> = ({ quantity }) => {
  const dispatch = useDispatch();

  const addNew = (productId: string, quantity: number) => {
    try {
      const action = addToCart(productId, quantity);
      dispatch(action);
      notification.open({
        message: 'Thêm giỏ hàng thành công',
        description: 'sản phẩm mới được thêm vào giỏ hàng của bạn',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    } catch (err) {
      console.log('err :>> ', err);
    }
  };
  const { id } = useParams();
  return (
    <div
      className='button__addToCart'
      onClick={() => {
        addNew(id, quantity);
      }}
    >
      Thêm vào giỏ hàng
    </div>
  );
};

export default ButtonAddToCart;
