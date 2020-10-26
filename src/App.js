import React from "react";
import Filter from "./components/Filter";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="px-5 container mx-auto min-h-full mb-16">
      <div className="max-w-md mx-auto border-solid border-2 border-gray-100 mt-32 px-6 py-10 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 w-full border-solid border-b-2 border-gray-500 pb-2">
          TO-DO APP
        </h1>
        <InputBox />
        <TodoList />
        <Filter />
      </div>
    </div>
  );
}

export default App;
