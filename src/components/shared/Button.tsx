import React from 'react';

import './button.scss';

type Props = {
  name: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onclick?: (event: any) => void;
};

export const Button: React.FC<Props> = ({ name, type, className, onclick }) => {
  return (
    <button type={type} onClick={onclick} className={`${className ? className : ''}`}>
      {name}
    </button>
  );
};
