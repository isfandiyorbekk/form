import React from "react";
import Inputs from "./Inputs";
import userInfo from "./Cardarr";
function Card({ card, text }) {
  const data = userInfo(text);
  return (
    <div>
      {card && (
        <div className="mt-30 mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-100 w-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            User Info
          </h2>
          <div className="space-y-3 text-gray-700">
            {data.map((item) => (
              <div className="flex justify-between border-b pb-2" key={item.id}>
                <span className="font-medium">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
