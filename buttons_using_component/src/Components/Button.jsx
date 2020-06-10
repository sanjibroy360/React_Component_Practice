import React from "react";

function Button(props) {
  var icon =  <svg
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  viewBox="0 0 24 24"
  stroke="currentColor"
  className = "icon"
>;
  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
  return React.createElement(
    "button",
    Button_Type(props),
    (props.icon ?  [icon,props.text] : props.text) || "Button"
  );
}

function Button_Type(props) {
  var classNames = {
    type: {
      outlined: "button_outlined",
      solid: "button_solid",
      flat: "button_flat",
    },

    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
    },

    
  };

  var attrs = [];

  for (let key in props) {
    if (key !== "text" && key !== "icon") {
      attrs.push(classNames[key][props[key]]);
    }
  }

  return { className: attrs.join(" ") };
}

export default Button;
