import React from 'react';

import './reduxFormInput.scss';

type InputType = {
  name: string;
  onBlur: any;
  onChange: any;
  onDragStart: any;
  onDrop: any;
  onFocus: any;
  value: string;
  inputClassName?: string | undefined;
  label: string;
};

type PropsType = {
  input: InputType;
  label: string;
  type?: string;
  typeText: 'textarea' | 'text';
  className: string;
  placeholder: string;
  inputClassName: string;
  meta: { touched: boolean; error: any; warning: any };
};

const ReduxFormInput: React.FC<PropsType> = ({
  input,
  label,
  type,
  typeText,
  className,
  placeholder,
  inputClassName,
  meta: { touched, error, warning },
}) => {
  return (
    <div className={`field ${className}`}>
      {typeText === 'text' && (
        <input
          {...input}
          className={`text-field ${inputClassName ? inputClassName : ''}`}
          id={input.name}
          type={type}
          placeholder={placeholder}
        />
      )}
      {typeText === 'textarea' && (
        <textarea
          className={`textarea-field ${inputClassName ? inputClassName : ''}`}
          {...input}
          id={input.name}
          // type={type}
          placeholder={placeholder}
        />
      )}
      <label className="label" htmlFor={input.name}>
        {label}
      </label>
      {touched &&
        ((error && (
          <span className="text-danger">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </span>
        )) ||
          (warning && (
            <span className="text-danger">
              <i className="fas fa-exclamation-circle"></i>
              {warning}
            </span>
          )))}
    </div>
  );
};

export default ReduxFormInput;
