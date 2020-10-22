interface TodoType {
  id: number;
  task: string;
  decription: string;
  date: {
    from: string;
    to: string | null;
  };
  state: number;
}

type TodoListType = TodoType[];

interface SubmitAddTodoType {
  newtask: string,
  description: string,
  toDate: string
}



