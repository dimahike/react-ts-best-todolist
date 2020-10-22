import { type } from 'os';
import React, { useEffect } from 'react';

import './hamburgerMenu.scss';

type Props = {
  children: any;
  autocCloseHamburger?: number;
};

const HamburgerMenu: React.FC<Props> = ({ children, autocCloseHamburger }) => {
  const [stateHamb, setStateHamb] = React.useState(false);
  useEffect(() => {
    setStateHamb(false);
  }, [autocCloseHamburger]);

  const OpenCloseHumburger = () => {
    setStateHamb(!stateHamb);
  };

  return (
    <>
      <div style={{ width: stateHamb ? '100%' : 0 }} id="myNav" className="overlay">
        <p className="closebtn" onClick={OpenCloseHumburger}>
          &times;
        </p>
        <div className="overlay-content">{children}</div>
      </div>

      <span onClick={OpenCloseHumburger} style={{ fontSize: '22px', cursor: 'pointer' }}>
        &#9776;
      </span>
    </>
  );
};

export default HamburgerMenu;
