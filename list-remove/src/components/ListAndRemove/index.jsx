import React from "react";
import PropTypes from "prop-types";

TodoList.PropsTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function whenOnClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => whenOnClick(todo)} // khi click thì nó gọi lại cái hàm whenonclick và truyền todo vào
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
