import React from 'react';
import PropTypes from "prop-types";

const InputText = ({title, placeholder, value, onChange, id, type, svgPath}) => {
    return (
        <label className="flex flex-col my-3">
            <span className="text-gray-600 text-sm">{title}</span>
            <div className="inline-flex items-center border-b-2 border-gray-300">
                {svgPath
                    && <svg
                        className="fill-current w-4 h-4 mx-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d={svgPath} />
                    </svg>}
                <input
                    id={id}
                    autoComplete="off" type={type}
                    className="form-input mt-1 w-full focus:outline-none"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </label>
    )
};

InputText.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    id: PropTypes.string,
    type: PropTypes.oneOf([
        'text', 'number', 'password', 'date', 'email', 'search', 'color', 'datetime-local', 'file',
        'hidden', 'month', 'range', 'tel', 'time', 'url', 'week'
    ]).isRequired,
    svgPath: PropTypes.string
};

InputText.defaultProps = {
    title: "",
    placeholder: "",
    value: "",
    onChange: null,
    id: "",
    type: "text",
    svgPath: ""
}

export default InputText;