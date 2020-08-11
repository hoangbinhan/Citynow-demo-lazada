import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNumber } from '../../../../actions/navbar';
import './style.scss';
import { AppState } from 'reducers';

const NavbarBodyCart: React.FC = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNumber);
    return () => {};
  }, [dispatch]);
  const number = useSelector((state: AppState) => state.cart.number);

  return (
    <Link to='/cart' className='HeaderBodyCart'>
      <span className='HeaderBodyCart__icon'>
        <i className='fas fa-shopping-cart'></i>
      </span>
      <span className='HeaderBodyCart__num'>{number}</span>
    </Link>
  );
};
export default NavbarBodyCart;
