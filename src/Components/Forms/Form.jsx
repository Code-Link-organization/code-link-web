/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "./InputField";

function Form({ initialValues, submitAction, inputs, children, type, token }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialValues);

  const submitFormHandler = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    inputs.forEach((input) => formdata.append(input.value, formData[input.value]));
    dispatch(submitAction({ formData: formdata, token: token ? token : null }));
  };

  return (
    <div className="w-[498px] mx-auto py-8">
      {children}
      <form className="py-2 flex flex-col gap-5" onSubmit={submitFormHandler}>
        {inputs.map((input, index) => (
          <InputField setFormData={setFormData} formData={formData} {...input} key={index} />
        ))}
        <button type="submit" className="btn w-fit mx-auto">
          {type}
        </button>
      </form>
    </div>
  );
}

export default Form;
