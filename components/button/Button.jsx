"use client";

import React from "react";

const buttonStyles = {
    primary: "bg-potrello-blue-100 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-potrello-red-100 hover:bg-potrello-red-100/50",
    warning: "bg-potrello-yellow-100 hover:bg-potrello-yellow-100/50",
};

const disabledStyle = "opacity-50 pointer-events-none";

const Button = ({ btnStyle = "primary", disabled = false, children, ...props }) => {
    const buttonStyle = buttonStyles[btnStyle];
    const finalStyle = disabled ? `${buttonStyle} ${disabledStyle}` : buttonStyle;

    return (
        <button 
            className={`text-white font-bold py-2 px-4 rounded ${finalStyle}`} 
            disabled={disabled} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;