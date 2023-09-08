/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function InputField({
    formData,
    icon,
    placeholder,
    setFormData,
    value,
    type,
    forgetPassword,
}) {
    const error = useSelector((state) => state.auth.error);
    const changeValueHandler = (e) => {
        const newValue = e.target.value;

        setFormData({ ...formData, [value]: newValue });
    };
    return (
        <div>
            <div className="input-form bg-white  ">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={value}
                    className=" input-field pl-2"
                    onChange={changeValueHandler}
                />
                <img
                    src={icon}
                    className="transition-all duration-200 ease-in  absolute left-4 top-1/2 -translate-y-1/2"
                />
            </div>
            {forgetPassword && (
                <Link
                    className="text-right mt-4 ml-auto text-lg block"
                    to="/forgetpassword"
                >
                    Forget Password?
                </Link>
            )}
            {error && error[value] && (
                <p className="my-1 pl-1 text-red-600">
                    *
                    {error[value].length
                        ? error[value].join(" & ")
                        : error[value]}
                </p>
            )}
        </div>
    );
}

export default InputField;
