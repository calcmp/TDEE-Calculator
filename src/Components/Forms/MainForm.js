import React, { useState } from "react";
import Form from "./Form";
import Form2 from "./Form2";

const MainForm = () => {
  const [changeFormula, setChangeFormula] = useState(false);
  const [title, setTitle] = useState("Mifflin St. Jeor Formula");

  const handleChange = () => {
    setChangeFormula(!changeFormula);
    handleTitle();
  };

  const handleTitle = () => {
    if (changeFormula) setTitle("Mifflin St. Jeor Formula");
    else setTitle("Katch-McCHANGE ME");
  };

  const renderForm = () => {
    if (changeFormula) return <Form2 />;
    else return <Form />;
  };

  return (
    <div class="bg-grey-darkest h-screen">
      <nav class="flex items-center justify-between flex-wrap bg-grey-lightest p-6">
        <div class="w-full block flex-grow lg:items-center lg:w-auto">
          <label class="inline-block px-4 py-2">{title}</label>
          <button
            class="inline-block bg-grey-light float-right text-sm px-4 py-2 leading-none border rounded hover:border-transparent hover:text-grey-darker hover:bg-white lg:mt-0"
            onClick={() => handleChange()}
          >
            Change Formula
          </button>
        </div>
      </nav>
      <div>{renderForm()}</div>
    </div>
  );
};

export default MainForm;
