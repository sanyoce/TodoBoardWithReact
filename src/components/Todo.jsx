import TodoInfo from '/src/components/TodoInfo.jsx';
import AddTaskForm  from '/src/components/AddTaskForm.jsx';
import SearchTaskForm from '/src/components/SearchTaskForm.jsx';
import TodoList from '/src/components/TodoList.jsx';

const Todo = () =>{
    return(
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
    )
}

export default Todo