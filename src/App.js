import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1 className="text-6xl font-semibold">Hello There</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
