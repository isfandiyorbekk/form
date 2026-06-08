import React, { useState } from "react";
import Inputsmap from "./Inputsmap";
import Card from "./Card";

function App() {
  const [text, setText] = useState({
    text: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [card, setCard] = useState(false);
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 mt-10 mx-auto"
        onSubmit={handleSubmit}
      >
        <Inputsmap handleChange={handleChange} />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCard(true)}
        >
          Submit
        </button>
      </form>
      <Card card={card} text={text} />
    </div>
  );
}

export default App;
