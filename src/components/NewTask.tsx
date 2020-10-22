import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { addTodo } from '../redux/actions/todolist';
import { maxLength200, maxLength30, minLength3, required } from '../utils/validators';

import './newtask.scss';
import ReduxFormInput from './ReduxFormInput';
import { Button } from './shared/Button';
import { State } from './State';

interface Props {}

const NewTask: React.FC<Props & InjectedFormProps<{}, Props>> = ({ handleSubmit, reset }: any) => {
  const dispatch = useDispatch();
  const [activeCalender, setactiveCalender] = React.useState<boolean>(false);
  // const [activeState, setActiveState] = React.useState<number>(1);
  let today = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
  const onHandleClick = () => {
    console.log('onclick');

    setactiveCalender(!activeCalender);
  };

  const submitAddTodo = (data: SubmitAddTodoType) => {
    const randomNumber = (Math.random() * 1e8).toFixed(0);
    const newId = Number(randomNumber);
    console.log('data', data);

    let toDate = null;

    if (data.toDate) {
      toDate = data.toDate.replace(/-/g, '.');
    }

    const newTodo: TodoType = {
      id: newId,
      task: data.newtask,
      decription: data.description,
      date: {
        from: today,
        to: toDate,
      },
      state: 1,
    };

    dispatch(addTodo(newTodo));
    reset();

    console.log('submit work', data);
  };
  // const selecteState = (selectedState: any) => {
  //   setActiveState(selectedState);
  //   console.log('activeState', selectedState);
  // };

  return (
    <div id="new-task">
      <form onSubmit={handleSubmit(submitAddTodo)} className="form-task">
        <div className="fotm-input">
          <Field
            typeText="text"
            className="inherit-width"
            name="newtask"
            type="text"
            component={ReduxFormInput}
            label="new task"
            placeholder="Enter Task"
            validate={[required, minLength3, maxLength30]}
          />

          <div>
            <div className="date">
              <span>From</span>
              <span>{today}</span>
              <span>to</span>
              <span onClick={onHandleClick} className="unlimite pointer">
                {!activeCalender && 'unlimite'}
              </span>
              {activeCalender && (
                <div style={{ display: 'flex' }}>
                  <div className="date__calender">
                    <Field name="toDate" component="input" type="date" />
                  </div>
                  <div onClick={onHandleClick} className="return pointer">
                    <i className="fas fa-undo-alt"></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Field
          className="inherit-width"
          typeText="textarea"
          name="description"
          component={ReduxFormInput}
          label="Description Task"
          placeholder="Enter Description Task"
          validate={[minLength3, maxLength200]}
        />
        <div className="btn-group">
          <Button type="button" onclick={reset} className="btn btn-danger" name="Clear Task" />
          <Button type="submit" className="btn btn-green" name="Add Task" />
        </div>
        {/* <div className="bottom">
          <State state={activeState} stateFromSelecter={selecteState} />
        </div> */}
      </form>
    </div>
  );
};

const form = reduxForm<{}, Props>({
  // a unique name for the form
  form: 'new-task',
})(NewTask);

export default connect(null)(form);
