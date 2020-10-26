import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (id) => dispatch(toggleTodo(id)),
  };
};

// ------------- TODO SINGLE ITEM COMPONENT -------------------------
const TodoItem = ({ todo, toggle }) => {
  return (
    <div>
      <div
        onClick={() => toggle(todo.id)}
        className={
          todo.completed
            ? "w-full mt-4 line-through break-words select-none shadow italic bg-gray-200 p-3 rounded-lg text-gray-400 cursor-pointer"
            : "w-full mt-4 select-none break-words shadow bg-red-100 p-3 pl-5 rounded-lg text-gray-700 cursor-pointer"
        }
      >
        <span>{todo.text}</span>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoItem);
