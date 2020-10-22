import React from 'react';
import { sortTodo } from '../sortTodo';

import HamburgerMenu from './HamburgerMenu';
import './headerStates.scss';

const HeaderStates = React.memo(function HeaderStates({ activeState, onClickState }: any) {
  console.log('activeState from  HeaderStates', activeState);

  // const onClickHamState = () => {
  //   console.log('onClickHamState');
  // };
  return (
    <>
      <ul className="option-list">
        {sortTodo.map((item: string, index: number) => (
          <li
            onClick={() => onClickState(index)}
            key={item}
            className={`option ${activeState === index ? 'active' : ''}`}>
            {item}
          </li>
        ))}
      </ul>

      <div className="hamburger">
        <HamburgerMenu autocCloseHamburger={activeState}>
          {sortTodo.map((state, index) => (
            <p
              className={activeState === index ? 'active-selecte-humburger' : ''}
              onClick={() => onClickState(index)}
              key={`p_${state}_${index}`}>
              {state}
            </p>
          ))}
        </HamburgerMenu>
      </div>
    </>
  );
});

export default HeaderStates;
