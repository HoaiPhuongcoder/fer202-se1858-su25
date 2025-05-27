import React from "react";

function Title({ name }) {
  return (
    <div className="text-center p-2.5">
      <h1 className="leading-relaxed text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        {name}
      </h1>
      <div className="w-100 h-1 mx-auto mt-4 bg-yellow-300 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"></div>
    </div>
  );
}

export default Title;
