import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTodo } from '../sortTodo';
import { sortByState } from '../redux/actions/sortList';
import './header.scss';
import HamburgerMenu from './HamburgerMenu';
import HeaderStates from './HeaderStates';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ sortList }: any) => sortList.state);

  console.log('state from header', state);

  const onClickHandleActiveState = (indexState: number) => {
    console.log('click state from Header', indexState);
    dispatch(sortByState(indexState));
  };

  return (
    <div id="header">
      <div className="left">
        <div className="header__logo">
          <i className="far fa-list-alt"></i>
          <p className="logo-text">TODO LIST</p>
        </div>
      </div>
      <div className="right">
        <HeaderStates activeState={state} onClickState={onClickHandleActiveState} />
      </div>
    </div>
  );
};
