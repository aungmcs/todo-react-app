import React from "react";
import { connect } from "react-redux";
import { clearTodo, filterTodo } from "../actions";

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearTodo: () => dispatch(clearTodo()),
    filterTodo: (filterType) => dispatch(filterTodo(filterType)),
  };
};

// ----------------- FILTER FOOTER COMPONENT --------------------
const Filter = ({ todo, clearTodo, filterTodo }) => {
  let numOfTodos = todo.filter((todo) => todo.completed === false).length;

  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => clearTodo()}
          className="px-3 sm:px-6 py-2 flex-shrink-0 text-sm rounded border font-semibold border-gray-700 
                             focus:outline-none focus:shadow-outline
                             hover:bg-gray-800 hover:text-white"
        >
          CLEAR ALL
        </button>
        <select
          className="text-gray-800 cursor-pointer text-sm appearence-none bg-transparent border border-gray-800 
                               rounded focus:shadow-outline font-semibold focus:outline-none p-2"
          name="filter"
          id="filter"
          onChange={(e) => filterTodo(e.target.value)}
        >
          <option className="p-5 rounded bg-white" value="ALL">
            ALL
          </option>
          <option className="p-5 rounded bg-white" value="ACTIVE">
            ACTIVE
          </option>
          <option className="p-5 rounded bg-white" value="COMPLETED">
            COMPLETED
          </option>
        </select>
      </div>
      <div className="text-md px-3 py-3 mt-6 text-center rounded font-semibold text-gray-700 bg-gray-200">
        {numOfTodos > 1
          ? `${numOfTodos} Things`
          : numOfTodos > 0
          ? `${numOfTodos} Thing`
          : "Nothing"}{" "}
        Left To Do
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
