import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../redux/actions/todolist';
import { sortTodo } from '../sortTodo';

import './state.scss';

type PropsType = {
  state: number;
  id?: number;
  stateFromSelecter?: any;
};

export const State: React.FC<PropsType> = ({ state, id, stateFromSelecter }) => {
  const dispatch = useDispatch();

  const sortRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [visibleState, setVisibleState] = React.useState<boolean>(false);
  const toggleVisibleState = () => {
    setVisibleState(!visibleState);
  };

  const onSelectItem = (indexActiveItem: number) => {
    if (id) {
      const date = {
        id: id,
        state: indexActiveItem + 1,
      };
      dispatch(updateState(date));
    }

    if (id === undefined) {
      returnData(indexActiveItem + 1);
      state = indexActiveItem;
    }

    setVisibleState(false);
  };

  const returnData = (data: any) => {
    stateFromSelecter(data);
  };

  const handleOutsideClick = (event: any) => {
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(sortRef.current)) {
      setVisibleState(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={`state ${sortTodo[state]}`}>
      <div className="sort-state" onClick={toggleVisibleState}>
        {!visibleState && <span className={`active-state `}>{sortTodo[state]}</span>}
        {visibleState && (
          <div className={`select-state ${sortTodo[state]}`}>
            <ul>
              {sortTodo.slice(1).map((item, index) => {
                return (
                  <li
                    key={`${item}_${index}`}
                    onClick={() => onSelectItem(index)}
                    // onMouseOver={onHandleMouseOver(index)}
                    // onMouseOut={onHandleMouseOut}
                    className={`li-${item} ${state === index + 1 ? 'active' : ''}`}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
